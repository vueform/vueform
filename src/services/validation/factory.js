import parse from './parse'
import replaceWildcards from './../../utils/replaceWildcards'
import compare from './../../utils/compare'
import Validator from './../../../src/services/validation/validator'
 
const Factory = class {

  constructor(path, form$) {
    this.form$ = form$
    this.element$ = form$.el$(path)
  }

  get rules() {
    return Object.assign({}, this.form$.$laraform.services.validation.rules, this.form$.$laraform.config.rules)
  }
 
  makeAll(rules) {
    let parsedRules = this.parseRules(rules)

    if (parsedRules.length == 0) {
      return []
    }

    return _.map(parsedRules, (rule) => {
      return this.make(rule)
    })
  }
  
  make(rule) {
    let ruleClass = typeof rule == 'function' ? this.createRule(rule) : this.rules[rule.name]

    if (!ruleClass) {
      throw new Error(`Unknown rule: '${rule.name}'`)
    }

    return new ruleClass(rule, {
      element$: this.element$
    })
  }

  createRule(inlineRule) {
    return inlineRule
    // return class extends Validator {
    //   get defaultMessage() {
    //     return new Promise(async (resolve, reject) => {
    //       let message = await inlineRule(this.element$.value, this.form$, this)

    //       resolve(message === true ? '' : message)
    //     })
    //   }

    //   async check() {
    //     return await inlineRule(this.element$.value, this.form$, this) === true
    //   }
    // }
  }

  parseRules(rules) {
    if (!_.isArray(rules)) {
      rules = rules.split('|')
    }
    
    return _.flatMap(rules, (rule) => {
      if (typeof rule == 'function') {
        return rule
      }

      return this.isConditional(rule) ? this.parseConditional(rule) : this.parse(rule)
    })
  }

  parse(rule) {
    return parse(rule)
  }

  isConditional(rule) {
    return _.isPlainObject(rule)
  }

  parseConditional(rule) {
    let condition = _.values(rule)[0]
    let parsed = parse(_.keys(rule)[0])

    // simplified condition
    if (_.isArray(condition)) {
      parsed = Object.assign({}, parsed, {
        dependent: replaceWildcards(condition[0], this.element$.path),
        condition: this.createConditionFromArray(condition),
      })

    // custom condition callback
    } else {
      parsed = Object.assign({}, parsed, {
        dependent: null,
        condition: condition,
      })
    }

    return parsed
  } 

  createConditionFromArray(condition) {
    let field = replaceWildcards(condition[0], this.element$.path)
    let operator = condition.length == 3 ? condition[1] : '='
    let value = condition.length == 3 ? condition[2] : condition[1]

    return () => {
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
        return compare(actual, expected, operator)
      }

      return true
    }
  }
}
 
export default Factory