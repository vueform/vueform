import _ from 'lodash'

const flattenKeys = function(obj, path = []) {
  return !_.isObject(obj)
    ? { [path.join('.')]: obj }
    : _.reduce(obj, (cum, next, key) => _.merge(cum, flattenKeys(next, [...path, key])), {})
}

// https://github.com/lodash/lodash/issues/2240#issuecomment-418820848
export default flattenKeys