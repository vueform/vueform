import normalize from './../../utils/normalize'
import replaceWildcards from './../../utils/replaceWildcards'
import compare from './../../utils/compare'
import _ from 'lodash'

// condition - condition information [otherPath, operator, expectedValue]
// elementPath - current
const check = (condition, elementPath, form$) => {
  let checkGlobal = () => {
    return form$.conditions[condition](form$)
  }

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
      return checkGlobal()

    case 'function':
      return checkFunction()

    case 'array':
      return checkArray()

    default:
      throw new Error('Condition must be a string, a function or an object')
  }
}

export default {
  check
}