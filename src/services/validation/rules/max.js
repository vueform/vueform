import Validator from './../validator'

export default class max extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      max: this.max,
    }
  }

  get max() {
    return this.attributes[0]
  } 

  check(value) {
    if (!value) {
      return true
    }

    return this.size(value) <= this.max
  }
}