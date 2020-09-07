import Validator from './../validator'

export default class uuid extends Validator {
  check(value) {
    var regex = /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i

    return regex.test(value)
  }
}