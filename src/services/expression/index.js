import { Parser, Expression } from 'expr-eval'
import replaceWildcardsExpr from '../../utils/replaceWildcardsExpr'
import localize from '../../utils/localize'

export default class {
  parser
  regex = /{(.+?)}|\\({.+?})/g
  config$
  form$
  moment
  lastParsed

  constructor ({ functions, consts }, config$, form$) {
    this.config$ = config$
    this.form$ = form$
    this.moment = this.config$.value.services.moment

    this.parser = new Parser({
      operators: {
        logical: true,
        comparison: true,
        in: true,
        assignment: false,
      },
    })

    Object.keys(this.parser.functions).forEach((func) => {
      delete this.parser.functions[func]
    })

    this.parser.functions.NOT = (a) => !a

    this.parser.functions.EMPTY = (v) => Array.isArray(v)
      ? !v.length
      : (v === '' || v === null || v === undefined)

    this.parser.functions.NOT_EMPTY = (v) => Array.isArray(v)
      ? !!v.length
      : (v !== '' && v !== null && v !== undefined)

    this.parser.functions.SUM = (...args) => {
      return this.sum(args)
    }

    this.parser.functions.AVG = (...args) => {
      const values = this.flatten(args, '').filter(v => v !== '')

      if (!values.length) {
        return 0
      }

      return this.sum(args) / values.length
    }

    this.parser.functions.MIN = (...args) => {
      const values = this.flatten(args, '').filter(v => v !== '')

      if (!values.length) {
        return 0
      }

      return values.sort((a, b) => a - b)[0]
    }

    this.parser.functions.MAX = (...args) => {
      const values = this.flatten(args, '').filter(v => v !== '')

      if (!values.length) {
        return 0
      }

      return values.sort((a, b) => b - a)[0]
    }

    this.parser.functions.ROUND = (value, places) => {
       const num = Number(value)

        if (isNaN(num)) {
          return 0
        }

        return Number(num.toFixed(places))
    }

    this.parser.functions.COUNT = (...args) => {
      const values = this.flatten(args, '').filter(v => v !== '')

      return values.length
    }

    this.parser.functions.AGE = (value) => {
      const date = this.date(value)
      return date.isValid() ? this.moment().diff(date, 'years') : '';
    }

    this.parser.functions.TODAY = () => {
      return this.moment().format('YYYY-MM-DD')
    }

    this.parser.functions.NOW = () => {
      return this.moment().toISOString()
    }

    this.parser.functions.DATE_ADD = (value, toAdd, interval) => {
      const date = this.date(value)

      return date.clone().add(toAdd, interval).toISOString()
    }

    this.parser.functions.FORMAT_DATE = (value, format) => {
      return this.date(value).format(format)
    }

    this.parser.functions.DISPLAY_VALUE = (value, path) => {
      const el$ = this.form$.value.el$(path)

      if (!el$) {
        return ''
      }

      const translate = (v) => localize(el$.resolvedOptions?.find(o => o.value === v)?.label || '', this.config$.value, this.form$.value)

      return Array.isArray(value)
        ? value.map(translate).join(', ')
        : translate(value)
    }

    Object.entries(functions || {}).forEach(([name, func]) => {
      this.parser.functions[name] = func
    })

    Object.entries(consts || {}).forEach(([name, con]) => {
      this.parser.consts[name] = con
    })

    Object.keys(this.parser.functions).forEach((func) => {
      this.parser.functions[func].toString = () => func
    })
  }

  flatten(args, defaultValue = 0) {
    return args.reduce((prev, curr) => {
      const value = Array.isArray(curr)
        ? curr.reduce((p, c) => {
          return p.concat(isNaN(Number(c)) || c === null || c === undefined || c === '' ? defaultValue : Number(c))
        }, [])
        : [isNaN(Number(curr)) || curr === null || curr === undefined || curr === '' ? defaultValue : Number(curr)]

        return prev.concat(value)
    }, [])
  }

  sum(args) {
    return this.flatten(args).reduce((p, c) => p+c, 0)
  }

  date(value) {
    return this.moment(value, [
      this.moment.ISO_8601,
      'YYYY-MM-DD',
      'MM/DD/YYYY',
      'DD/MM/YYYY',
      'DD.MM.YYYY',
      'YYYY/MM/DD',
      'DD MMM YYYY',
      'MMM DD, YYYY',
      'YYYY-MM-DD HH:mm:ss',
      'MM/DD/YYYY hh:mm A',
      'DD.MM.YYYY HH:mm',
      'DD/MM/YYYY HH:mm:ss',
      'YYYY/MM/DD HH:mm:ss',
      'ddd, DD MMM YYYY HH:mm:ss Z'
    ], true);
  }

  resolve (exp, data, dataPath) {
    return exp.replace(this.regex, (match, expression, escaped) => {
      if (expression !== undefined) {
        let resolved
        let parsed

        parsed = this.parse(expression, dataPath)

        if (!(parsed instanceof Expression)) {
          return ''
        }

        try {
          if (this.containsSelf(parsed, dataPath)) {
            throw new Error(`Can\'t contain self data path (\`${dataPath}\`)`)
          }

          resolved = String(parsed.evaluate(data))
        } catch (e) {
          if (this.config$.value.config.expressionDebug) {
            console.warn(`Expression error in: ${expression}:`, e)
          }
        }

        if (resolved === 'NaN') {
          resolved = '0'
        }

        if ([null, undefined, 'null', 'undefined', '[object Object]'].includes(resolved) || resolved === '') {
          resolved = ''
        }

        return resolved
      }

      if (escaped !== undefined) {
        return escaped.replace(/\\}$/, '\}');
      }

      return match
    })
  }

  parse (expression, dataPath) {
    let parsed

    expression = expression
      .replace(/([a-zA-Z_-][a-zA-Z0-9_-]*)\.([0-9\*])+\b/g, '$1[$2]')
      .replace(/([a-zA-Z_-][a-zA-Z0-9_-]*)\.([0-9\*])\.+\b/g, '$1[$2].')

    expression = replaceWildcardsExpr(expression, dataPath)

    try {
      parsed = this.parser.parse(expression)
    } catch (e) {
      if (this.config$.value.config.expressionDebug) {
        console.warn(`Expression error in: ${expression}:`, e)
      }
    }
  
    return parsed
  }

  parseAll(expressionChain, dataPath) {
    if (typeof expressionChain !== 'string') {
      return []
    }

    return [...(expressionChain?.matchAll(this.regex) || [])]
      .map(m => m[1])
      .filter(m => !!m)
      .map(e => ({
        expression: e,
        parsed: this.parse(e, dataPath),
      }))
  }

  vars(expressionChain, dataPath) {
    if (typeof expressionChain !== 'string') {
      return []
    }

    return [...(expressionChain?.matchAll(this.regex) || [])]
      .map(m => m[1])
      .filter(m => !!m)
      .reduce((prev, e) => {
        e = replaceWildcardsExpr(e
          .replace(/\.([0-9\*])+\b/g, '[$1]')
          .replace(/\.([0-9\*])\.+\b/g, '[$1].')
        , dataPath)

        e = e
          .replace(/\[([0-9\*])+]/g, '._$1_')
          .replace(/\[([0-9\*])+]\./g, '._$1_.')

        return [
          ...prev,
          ...(this
            .parse(e, dataPath)
            ?.variables({ withMembers: true })
            ?.map(v => v
              .replace(/\._([0-9]+)_/g, '.$1')
              .replace(/\._([0-9]+)_\./g, '.$1.')
            ) || []
          )
        ]
      }, [])
  }

  wrap(expression) {
    if (!/^{/.test(expression) && !/}$/.test(expression)) {
      expression = `{${expression}}`
    }

    return expression
  }

  unwrap(expression) {
    return expression.replace(/^\{|\}$/g, '')
  }

  containsSelf(parsed, dataPath) {
    return this.vars(this.wrap(parsed?.toString()||''), dataPath)?.includes(dataPath)
  }
}