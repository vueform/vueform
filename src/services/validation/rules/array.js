import Validator from './../validator'

export default class array extends Validator {
  check(value) {
    return _.isArray(value)
  }
}