import Validator from './../validator'

export default class digits_between extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      min: this.min,
      max: this.max,
    }
  }

  get min() {
    return this.attributes[0]
  }

  get max() {
    return this.attributes[1]
  }

  check(value) {
    let length = value.toString().length

    return /^\d+$/.test(value) && length >= this.min && length <= this.max
  }
}