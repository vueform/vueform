import isArray from 'lodash-es/isArray'
import includes from 'lodash-es/includes'
import startsWith from 'lodash-es/startsWith'
import endsWith from 'lodash-es/endsWith'
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
      return isArray(actual)
        ? actual.every(a => a > expected)
        : actual > expected

    case '>=':
      return isArray(actual)
        ? actual.every(a => a >= expected)
        : actual >= expected

    case '<':
      return isArray(actual)
        ? actual.every(a => a < expected)
        : actual < expected

    case '<=':
      return isArray(actual)
        ? actual.every(a => a <= expected)
        : actual <= expected

    case 'empty':
      if (isArray(actual)) {
        return !actual.length
      } else if (actual && actual instanceof File) {
        return false
      } else if (actual && typeof actual === 'object') {
        let values = Object.values(actual)

        return !values.length || values.every(v => !v)
      } else {
        return !actual
      }

    case 'not_empty':
      if (isArray(actual)) {
        return !!actual.length
      } else if (actual && actual instanceof File) {
        return true
      } else if (actual && typeof actual === 'object') {
        let values = Object.values(actual)

        return values.length && values.some(v => !!v)
      } else {
        return !!actual
      }

    case '==':
    case 'in':
      if (isArray(expected)) {
        if (isArray(actual)) {
          // ['checkboxes', [1,2,3]]
          return !expected.length
            ? !actual.length
            : actual.filter(a => includes(expected, a)).length > 0
        } else {
          // ['text', [1,2,3]]
          return expected.indexOf(actual) !== -1
        }
      } else {
        if (isArray(actual)) {
          // ['checkboxes', 1]
          return actual.indexOf(expected) !== -1
        } else {
          // ['text', 1]
          return actual == expected 
        }
      }

    case '!=':
    case 'not_in':
      if (isArray(expected)) {
        if (isArray(actual)) {
          // ['checkboxes', 'not_in', [1,2,3]]
          return !expected.length
            ? !!actual.length
            : actual.filter(e => includes(expected, e)).length == 0
        } else {
          // ['text', 'not_in', [1,2,3]]
          return expected.indexOf(actual) === -1
        }
      } else {
        if (isArray(actual)) {
          // ['checkboxes', '!=', 1]
          return actual.indexOf(expected) === -1
        } else {
          // ['text', '!=', 1]
          return actual != expected 
        }
      }

    case 'today':
      if (!isArray(actual)) {
        actual = [actual]
      }

      return actual.length && actual.every(a => moment(a, el$.valueDateFormat).isSame(moment(), 'day'))

    case 'before':
      if (!isArray(actual)) {
        actual = [actual]
      }

      return actual.length && actual.every((a) => {
        let date = moment(a, el$.valueDateFormat)

        return date.isValid() && date.isBefore(moment(expected === 'today' ? undefined : expected), 'day')
      })

    case 'after':
      if (!isArray(actual)) {
        actual = [actual]
      }

      return actual.length && actual.every((a) => {
        let date = moment(a, el$.valueDateFormat)

        return date.isValid() && date.isAfter(moment(expected === 'today' ? undefined : expected), 'day')
      })

    case '^':
      return startsWith(actual, expected)

    case '$':
      return endsWith(actual, expected)

    case '*':
      return includes(actual, expected)
  }
}