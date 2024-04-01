import map from 'lodash/map'
import isArray from 'lodash/isArray'
import flatMap from 'lodash/flatMap'
import isPlainObject from 'lodash/isPlainObject'
import values from 'lodash/values'
import keys from 'lodash/keys'
import get from 'lodash/get'
import parse from './parse'
import replaceWildcards from './../../utils/replaceWildcards'
import compare from './../../utils/compare'
 
const Factory = class {

  constructor(path, form$) {
    this.form$ = form$
    this.element$ = form$.el$(path)
  }

  get rules() {
    let rules = Object.assign({}, this.form$.$vueform.services.validation.rules, this.form$.$vueform.rules)

    if (!rules.in && rules.in_) {
      rules.in = rules.in_
    }

    return rules
  }
 
  makeAll(rules) {
    let parsedRules = this.parseRules(rules)

    if (parsedRules.length == 0) {
      return []
    }

    return map(parsedRules, (rule) => {
      return this.make(rule)
    })
  }
  
  make(rule) {
    let ruleClass = typeof rule == 'function'
      ? rule
      : Array.isArray(rule)
        ? rule[0]
        : this.rules[rule.name] 

    if (!ruleClass) {
      throw new Error(`Unknown rule: '${rule.name}'`)
    }

    return new ruleClass(rule?.name ? rule : {
      name: `custom_rule_${Math.floor(Math.random() * 9000000) + 1000000}`,
      attributes: Array.isArray(rule) && rule[1] ? rule[1] : []
    }, {
      element$: this.element$
    })
  }

  parseRules(rules) {
    if (!isArray(rules)) {
      rules = rules.split('|')
    }
    
    return rules.map((rule) => {
      if (typeof rule == 'function' || Array.isArray(rule)) {
        return rule
      }

      return this.isConditional(rule) ? this.parseConditional(rule) : this.parse(rule)
    })
  }

  parse(rule) {
    return parse(rule)
  }

  isConditional(rule) {
    return isPlainObject(rule)
  }

  parseConditional(rule) {
    let conditions = values(rule)[0]

    if (!Array.isArray(conditions[0])) {
      conditions = [conditions]
    }

    let parsed = {
      ...parse(keys(rule)[0]),
      conditions: (form$, Validator, el$) => {
        return conditions.every((condition) => {
          if (isArray(condition)) {
            if (isArray(condition[0])) {
              return condition.some((subcondition) => {
                if (isArray(subcondition)) {
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
      if (isArray(condition)) {
        if (isArray(condition[0])) {
          condition.forEach((subcondition) => {
            if (isArray(subcondition)) {
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
    let operator = condition.length == 3 || ['empty', 'not_empty', 'today'].indexOf(condition[1]) !== -1 ? condition[1] : '=='
    let value = condition.length == 3 ? condition[2] : (
      ['empty', 'not_empty', 'today'].indexOf(condition[1]) === -1 ? condition[1] : true
    )

    return (form$, Validator, el$) => {
      var actual = get(form$.requestData, field)
      var expected = value

      return compare(actual, operator, expected, this.element$)
    }
  }
}
 
export default Factory