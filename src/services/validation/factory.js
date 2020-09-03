import parse from './parse'
import Validator from './validator'
import replaceWildcards from './../../utils/replaceWildcards'
 
const Factory = class {

  constructor(element$) {
    this.element$ = element$
    this.form$ = element$.form$

    this.ignore = ['nullable', 'bail', 'sometimes']
  }

  get rules() {
    let rules = this.element$.rules

    if (!_.isArray(rules)) {
      rules = rules.split('|')
    }
    
    return _.flatMap(rules, (rule) => {
      return parse(rule)
    })
  }
 
  makeAll() {
    if (this.rules.length == 0) {
      return []
    }

    return _.map(this.rules, (rule) => {
      if (this.ignore.indexOf(rule.name) !== -1) {
        return
      }

      return this.make(rule)
    })
  }
  
  make(rule) {
    return new this.form$.$laraform.services.validation.rules[rule.name](rule, {
      element$: this.element$
    })
  }
}
 
export default Factory