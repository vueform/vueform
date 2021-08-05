import _ from 'lodash'
import Validator from './../validator'

export default class string extends Validator {
  check(value) {
    return _.isString(value)
  }
}