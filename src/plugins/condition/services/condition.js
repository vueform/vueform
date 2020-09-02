import normalize from './../../../utils/normalize'
import replaceWildcards from './../../../utils/replaceWildcards'
import compare from './../../../utils/compare'
import _ from 'lodash'

const check = (condition, el$) => {
  let form$ = el$.form$
  let path = el$.path

  let checkGlobal = () => {
    return form$.conditions[condition](form$)
  }

  let checkFunction = () => {
    return condition(form$)
  }

  let checkArray = () => {
    let { path, operator, expected } = details()

    let element$ = form$.el$(path)

    let hasCircularCondition = false

    if (element$) {
      _.each(element$.conditions, (condition) => {
        if (condition[0] == el$.path) {
          hasCircularCondition = true
        }
      })
    }

    if (!element$ || (!hasCircularCondition && !element$.available)) {
      return false
    }

    return compareValues(element$.value, expected, operator)
  }

  let details = () => {
    return {
      path: path ? replaceWildcards(condition[0], path) : condition[0],
      operator: condition.length == 3 ? condition[1] : '=',
      expected: condition.length == 3 ? condition[2] : condition[1],
    }
  }

  let compareValues = (actual, expected, operator) => {
    actual = normalize(actual)
    expected = normalize(expected)

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

  let getType = () => {
    if (typeof condition == 'string') {
      return 'string'
    } else if (typeof condition == 'function') {
      return 'function'
    } else if (_.isArray(condition)) {
      return 'array'
    }
  }

  switch (getType(condition)) {
    case 'string':
      return checkGlobal(condition)

    case 'function':
      return checkFunction(condition)

    case 'array':
      return checkArray(condition)

    default:
      throw new Error('Condition must be a string, a function or an object')
  }
}

export default {
  check
}