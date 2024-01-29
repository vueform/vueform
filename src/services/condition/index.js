import each from 'lodash/each'
import isArray from 'lodash/isArray'
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
      each(element$.conditions, (condition) => {
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
      operator: condition.length == 3 || ['empty', 'not_empty', 'today'].indexOf(condition[1]) !== -1 ? condition[1] : '==',
      expected: condition.length == 3 ? condition[2] : (
        ['empty', 'not_empty', 'today'].indexOf(condition[1]) === -1 ? condition[1] : true
      )
    }
  }

  let compareValues = (actual, expected, operator) => {
    return compare(actual, operator, expected, el$)
  }
  
  if (typeof condition == 'function') {
    return checkFunction()
  }

  else if (isArray(condition) && isArray(condition[0])) {
    return condition.reduce((prev, curr) => {
      if (prev) {
        return prev
      }

      if (isArray(curr[0])) {
        return curr.reduce((p, c) => !p ? p : checkArray(c), true)
      }

      return checkArray(curr)
    }, false)
  }

  else if (isArray(condition)) {
    return checkArray(condition)
  }

  throw new Error('Condition must be a function or an array')
}

export default {
  check
}