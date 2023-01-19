import _ from 'lodash'
import normalize from './../../utils/normalize'
import replaceWildcards from './../../utils/replaceWildcards'
import moment from 'moment'

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
    actual = Array.isArray(actual) ? actual.map(e => normalize(e)) : normalize(actual)
    expected = Array.isArray(expected) ? expected.map(e => normalize(e)) : normalize(expected)

    switch (operator.toLowerCase()) {
      case '>':
        return _.isArray(actual)
          ? actual.length > expected
          : actual > expected

      case '>=':
        return _.isArray(actual)
          ? actual.length >= expected
          : actual >= expected

      case '<':
        return _.isArray(actual)
          ? actual.length < expected
          : actual < expected

      case '<=':
        return _.isArray(actual)
          ? actual.length <= expected
          : actual <= expected

      case '==':
      case 'in':
        if (_.isArray(expected)) {
          if (_.isArray(actual)) {
            // ['checkboxes', [1,2,3]]
            return actual.filter(e => _.includes(expected, e)).length > 0
          } else {
            // ['text', [1,2,3]]
            return expected.indexOf(actual) !== -1
          }
        } else {
          if (_.isArray(actual)) {
            // ['checkboxes', 1]
            return actual.indexOf(expected) !== -1
          } else {
            // ['text', 1]
           return actual == expected 
          }
        }

      case '!=':
      case 'not_in':
        if (_.isArray(expected)) {
          if (_.isArray(actual)) {
            // ['checkboxes', 'not_in', [1,2,3]]
            return actual.filter(e => _.includes(expected, e)).length == 0
          } else {
            // ['text', 'not_in', [1,2,3]]
            return expected.indexOf(actual) === -1
          }
        } else {
          if (_.isArray(actual)) {
            // ['checkboxes', '!=', 1]
            return actual.indexOf(expected) === -1
          } else {
            // ['text', '!=', 1]
           return actual != expected 
          }
        }

      case 'today':
        if (!_.isArray(actual)) {
          actual = [actual]
        }

        return actual.some(a => moment(a, el$.valueDateFormat).isSame(moment(), 'day'))

      case 'before':
        if (!_.isArray(actual)) {
          actual = [actual]
        }

        return actual.every((a) => {
          let date = moment(a, el$.valueDateFormat)

          return date.isValid() && date.isBefore(moment(expected === 'today' ? undefined : expected), 'day')
        })

      case 'after':
        if (!_.isArray(actual)) {
          actual = [actual]
        }

        return actual.every((a) => {
          let date = moment(a, el$.valueDateFormat)

          return date.isValid() && date.isAfter(moment(expected === 'today' ? undefined : expected), 'day')
        })

      case '^':
        return _.startsWith(actual, expected)

      case '$':
        return _.endsWith(actual, expected)

      case '*':
        return _.includes(actual, expected)
    }
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