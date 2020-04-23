import utils from './index'

const check = (condition, path, form$) => {
  let checkGlobal = () => {
    return form$.conditions[condition].call(form$)
  }

  let checkFunction = () => {
    return condition.call(form$)
  }

  let checkArray = () => {
    var { path, operator, expected } = details()

    var element$ = form$.el$(path)

    if (!element$ || !element$.available) {
      return false
    }

    return compare(element$.value, expected, operator)
  }

  let details = () => {
    return {
      path: path ? utils.replaceWildcards(condition[0], path) : condition[0],
      operator: condition.length == 3 ? condition[1] : '=',
      expected: condition.length == 3 ? condition[2] : condition[1],
    }
  }

  let compare = (actual, expected, operator) => {
    actual = utils.normalize(actual)
    expected = utils.normalize(expected)

    if (_.isArray(expected)) {
      if (operator === '!=') {
        if (expected.indexOf(actual) !== -1) {
          return false
        }
      } else if (expected.indexOf(actual) === -1) {
        return false
      }
    } else {
      return utils.compare(actual, expected, operator)
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