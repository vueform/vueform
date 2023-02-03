import _ from 'lodash'
import parse from './parse'
import replaceWildcards from './../../utils/replaceWildcards'
import compare from './../../utils/compare'
 
const Factory = class {

  constructor(path, form$) {
    this.form$ = form$
    this.element$ = form$.el$(path)
  }

  get rules() {
    return Object.assign({}, this.form$.$vueform.services.validation.rules, this.form$.$vueform.rules)
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
    let ruleClass = typeof rule == 'function' ? rule : this.rules[rule.name]

    if (!ruleClass) {
      throw new Error(`Unknown rule: '${rule.name}'`)
    }

    return new ruleClass(rule, {
      element$: this.element$
    })
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
    let conditions = _.values(rule)[0]

    if (!Array.isArray(conditions[0])) {
      conditions = [conditions]
    }

    let parsed = {
      ...parse(_.keys(rule)[0]),
      conditions: (form$, Validator, el$) => {
        return conditions.every((condition) => {
          if (_.isArray(condition)) {
            if (_.isArray(condition[0])) {
              return condition.some((subcondition) => {
                if (_.isArray(subcondition)) {
                  return this.createConditionFromArray(subcondition)(form$, Validator, el$)
                } else {
                  return condition(form$, Validator, el$)
                }
              })
            } else {
              return this.createConditionFromArray(condition)(form$, Validator, el$)
            }
          } else {
            return condition(form$, Validator, el$)
          }
        })
      },
      dependents: [],
    }

    conditions.forEach((condition) => {
      if (_.isArray(condition)) {
        if (_.isArray(condition[0])) {
          condition.forEach((subcondition) => {
            if (_.isArray(subcondition)) {
              parsed.dependents.push(replaceWildcards(subcondition[0], this.element$.path))
            }
          })
        } else {
          parsed.dependents.push(replaceWildcards(condition[0], this.element$.path))
        }
      }
    })

    return parsed
  } 

  createConditionFromArray(condition) {
    let field = replaceWildcards(condition[0], this.element$.path)
    let operator = condition.length == 3 ? condition[1] : '=='
    let value = condition.length == 3 ? condition[2] : condition[1]

    return (form$, Validator, el$) => {
      var actual = _.get(form$.requestData, field)
      var expected = value

      return compare(actual, operator, expected, this.element$)
    }
  }
}
 
export default Factory