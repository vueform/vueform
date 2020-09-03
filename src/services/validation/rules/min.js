import Validator from './../validator'

export default class min extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      min: this.min,
    }
  }

  get min() {
    return this.attributes[0]
  } 

  check(value) {
    if (!value) {
      return true
    }

    return this.size(value) >= this.min
  }
}