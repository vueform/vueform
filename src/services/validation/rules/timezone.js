import Validator from './../validator'

export default class timezone extends Validator {
  check(value) {
    try {
      Intl.DateTimeFormat(undefined, {timeZone: value})

      return true
    }
    catch (ex) {
      return false
    }
  }
}