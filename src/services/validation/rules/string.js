import isString from 'lodash/isString'
import Validator from './../validator'

export default class StrinValidator extends Validator {
  check(value) {
    return isString(value)
  }
}