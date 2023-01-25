import _ from 'lodash'
import compare from './../../utils/compare'
import replaceWildcards from './../../utils/replaceWildcards'

// condition - condition information [otherPath, operator, expectedValue]
// elementPath - current
const check = (condition, elementPath, form$, el$) => {
  let checkFunction = () => {
    return condition(form$, el$)
  }

  let checkArray = (condition) => {
    let { conditionPath, operator, expected } = details(condition)

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

  let details = (condition) => {
    return {
      conditionPath: elementPath ? replaceWildcards(condition[0], elementPath) : condition[0],
      operator: condition.length == 3 ? condition[1] : '==',
      expected: condition.length == 3 ? condition[2] : condition[1],
    }
  }

  let compareValues = (actual, expected, operator) => {
    return compare(actual, operator, expected)
  }
  
  if (typeof condition == 'function') {
    return checkFunction()
  }

  else if (_.isArray(condition) && _.isArray(condition[0])) {
    return condition.reduce((prev, curr) => {
      return prev ? prev : checkArray(curr)
    }, false)
  }

  else if (_.isArray(condition)) {
    return checkArray(condition)
  }

  throw new Error('Condition must be a function or an array')
}

export default {
  check
}