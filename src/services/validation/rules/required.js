import Validator from './../validator'

export default class required extends Validator {
  check(value) {
    return this.filled(value)
  }
}