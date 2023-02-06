import _ from 'lodash'
import moment from 'moment'
import normalize from './normalize'

export default function(actual, operator, expected, el$) {
  if (!operator) {
    return false
  }

  actual = Array.isArray(actual) ? actual.map(e => normalize(e)) : normalize(actual)
  expected = Array.isArray(expected) ? expected.map(e => normalize(e)) : normalize(expected)
  
  switch (operator.toLowerCase()) {
    case '>':
      return _.isArray(actual)
        ? actual.length && actual.every(a => a > expected)
        : actual > expected

    case '>=':
      return _.isArray(actual)
        ? actual.length && actual.every(a => a >= expected)
        : actual >= expected

    case '<':
      return _.isArray(actual)
        ? actual.length && actual.every(a => a < expected)
        : actual < expected

    case '<=':
      return _.isArray(actual)
        ? actual.length && actual.every(a => a <= expected)
        : actual <= expected

    case '==':
    case 'in':
      if (_.isArray(expected)) {
        if (_.isArray(actual)) {
          // ['checkboxes', [1,2,3]]
          return !expected.length
            ? !actual.length
            : actual.filter(a => _.includes(expected, a)).length > 0
        } else if (actual && typeof actual === 'object') {
          return Object.values(actual).every(a => _.includes(expected, a))
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
          return !expected.length
            ? !!actual.length
            : actual.filter(e => _.includes(expected, e)).length == 0
        } else if (actual && typeof actual === 'object') {
          return Object.values(actual).some(a => !_.includes(expected, a))
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

      return actual.length && actual.every(a => moment(a, el$.valueDateFormat).isSame(moment(), 'day'))

    case 'before':
      if (!_.isArray(actual)) {
        actual = [actual]
      }

      return actual.length && actual.every((a) => {
        let date = moment(a, el$.valueDateFormat)

        return date.isValid() && date.isBefore(moment(expected === 'today' ? undefined : expected), 'day')
      })

    case 'after':
      if (!_.isArray(actual)) {
        actual = [actual]
      }

      return actual.length && actual.every((a) => {
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