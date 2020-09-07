import Validator from './../validator'

export default class filled extends Validator {
  check(value) {
    return this.filled(value)
  }
}