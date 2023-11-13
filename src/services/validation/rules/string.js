import isString from 'lodash-es/isString'
import Validator from './../validator'

export default class string extends Validator {
  check(value) {
    return isString(value)
  }
}