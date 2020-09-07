import Validator from './../validator'

export default class digits extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      digits: this.digits,
    }
  }

  get digits() {
    return this.attributes[0]
  }

  check(value) {
    return /^\d+$/.test(value) && value.toString().length == this.digits
  }
}