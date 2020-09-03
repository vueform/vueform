import normalize from './../../../utils/normalize'
import validators from './validators'

const helpers = {
  normalize(value) {
    return normalize(value)
  },
  getValueType(Rule) {
    if (Rule.isNumeric()) {
      return 'numeric'
    }
    else if (Rule.isFile()) {
      return 'file'
    }
    else if (Rule.isArray()) {
      return 'array'
    }
    else {
      return 'string'
    }
  },
  getSize(Rule, value) {
    if (Rule.isNumeric()) {
      return value
    }
    else if (Rule.isFile()) {
      return value.size / 1000
    }
    else if (Rule.isArray()) {
      return value.length
    }
    else {
      return String(value).length
    }
  },
  getSizeByType(value, type) {
    if (type == 'numeric') {
      return value
    }
    else if (type == 'file') {
      return value.size / 1000
    }
    else if (type == 'array') {
      return value.length
    }
    else {
      return !value ? 0 : value.length
    }
  },
  requireParameterCount(count, attributes, rule) {
    if (_.keys(attributes).length < count) {
      throw new Error(rule + ' requires at least ' + count + ' parameters')
    }
  },
  requireExactParameterCount(count, attributes, rule) {
    if (_.keys(attributes).length < count) {
      throw new Error(rule + ' requires ' + count + ' parameters')
    }
  },
  requireSameType(one, other) {
    if (typeof one !== typeof other
      && validators.filled(one)
      && validators.filled(other)) {
      throw new Error('The values under comparison must be of the same type')
    }
  },
  selectSizeMessage(Rule, messages) {
    return messages[helpers.getValueType(Rule)]
  },
}

export default helpers