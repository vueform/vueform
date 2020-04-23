import parse from './parse'
import Validator from './validator'
import utils from './../index'

const Factory = class {

  constructor(element$, form$) {
    this.form$ = form$
    this.element$ = element$
  }

  makeValidators(rules) {
    if (rules.length == 0) {
      return []
    }

    if (!_.isArray(rules)) {
      rules = rules.split('|')
    }

    rules = this._parseAll(rules)

    var nullable = this._getNullable(rules)
    var numeric = this._hasNumeric(rules)

    var validators = []

    var ignore = ['nullable', 'bail', 'sometimes']

    _.each(rules, (rule) => {
      if (ignore.indexOf(rule.rule) !== -1) {
        return
      }

      validators.push(this.make(rule, {
        nullable: nullable,
        numeric: numeric,
      }))
    })

    return validators
  }

  make(rule, props) {
    return new Validator(rule, Object.assign({}, props, {
      element$: this.element$,
    }), this.form$)
  }

  _getNullable(rules) {
    return _.find(rules, { rule: 'nullable' })
  }

  _hasNumeric(rules) {
    return _.find(rules, { rule: 'integer' })
      || _.find(rules, { rule: 'numeric' }) ? true : false
  }

  _parseAll(rules) {
    return _.flatMap(rules, (rule) => {
      if (typeof rule == 'function') {
        return {
          rule: rule
        }
      }

      return this._isConditional(rule)
        ? this._parseConditional(rule)
        : this._parse(rule)
    })
  }

  _isConditional(rule) {
    return _.isObject(rule)
  }

  _parse(rule) {
    return Object.assign({}, parse(rule), {
      conditional: null,
      condition: null,
    })
  }

  _parseConditional(rule) {
    var condition = _.values(rule)[0]
    var rule = _.keys(rule)[0]

    var parsed = parse(rule)

    // simplified condition
    if (_.isArray(condition)) {
      parsed.conditional = utils.replaceWildcards(condition[0], this.element$.path)
      parsed.condition = this._createConditionFromArray(condition)

      // custom condition callback
    } else {
      parsed.conditional = null
      parsed.condition = condition
    }

    return parsed
  }

  _createConditionFromArray(condition) {
    var field = utils.replaceWildcards(condition[0], this.element$.path)
    var operator = condition.length == 3 ? condition[1] : '='
    var value = condition.length == 3 ? condition[2] : condition[1]

    return (Validator) => {
      var actual = _.get(this.form$.data, field)
      var expected = value

      if (_.isArray(expected)) {
        if (operator === '!=') {
          if (expected.indexOf(actual) !== -1) {
            return false
          }
        } else if (expected.indexOf(actual) === -1) {
          return false
        }
      } else {
        return utils.compare(actual, expected, operator)
      }

      return true
    }
  }
}

export default Factory