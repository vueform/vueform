import Validator from './../validator'

export default class size extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      size: this.size_,
    }
  }

  get size_() {
    return this.attributes[0]
  } 

  check(value) {
    if (!value) {
      return true
    }

    return this.size(value) == this.size_
  }
}