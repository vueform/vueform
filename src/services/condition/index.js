import normalize from './../../utils/normalize'
import replaceWildcards from './../../utils/replaceWildcards'
import compare from './../../utils/compare'
import _ from 'lodash'

// condition - condition information [otherPath, operator, expectedValue]
// elementPath - current
const check = (condition, elementPath, form$) => {
  let checkFunction = () => {
    return condition(form$)
  }

  let checkArray = () => {
    let { conditionPath, operator, expected } = details()

    // other
    let element$ = form$.el$(conditionPath)

    let hasCircularCondition = false

    // other && currentPath
    if (element$ && elementPath) {
      _.each(element$.conditions, (condition) => {
        if (!Array.isArray(condition)) {
          return
        }

        if (condition[0] == elementPath) {
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
      conditionPath: elementPath ? replaceWildcards(condition[0], elementPath) : condition[0],
      operator: condition.length == 3 ? condition[1] : '=',
      expected: condition.length == 3 ? condition[2] : condition[1],
    }
  }

  let compareValues = (actual, expected, operator) => {
    actual = normalize(actual)
    expected = normalize(expected)

    if (_.isArray(expected)) {
      if (operator.toLowerCase() === 'not_in') {
        // ['checkboxes', 'not_in', [1,2,3]]
        if (_.isArray(actual)) {
          return actual.filter(e => expected.includes(e)).length == 0

        // ['checkbox', 'not_in', [1,2,3]]
        } else {
          return expected.indexOf(actual) === -1
        }
      } else {
        // ['checkboxes', [1,2,3]]
        if (_.isArray(actual)) {
          return actual.filter(e => expected.includes(e)).length > 0

        // ['checkbox', [1,2,3]]
        } else {
          return expected.indexOf(actual) !== -1
        }
      }
    }
    
    return compare(actual, expected, operator)
  }
  
  if (typeof condition == 'function') {
    return checkFunction()
  }

  else if (_.isArray(condition)) {
    return checkArray()
  }

  throw new Error('Condition must be a function or an array')
}

export default {
  check
}