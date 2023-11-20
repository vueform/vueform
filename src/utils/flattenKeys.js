import isObject from 'lodash/isObject'
import reduce from 'lodash/reduce'
import merge from 'lodash/merge'

const flattenKeys = function(obj, path = []) {
  return !isObject(obj)
    ? { [path.join('.')]: obj }
    : reduce(obj, (cum, next, key) => merge(cum, flattenKeys(next, [...path, key])), {})
}

// https://github.com/lodash/lodash/issues/2240#issuecomment-418820848
export default flattenKeys