import Validator from './../validator'

export default class between extends Validator {
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
    if (!value) {
      return true
    }

    let size = this.size(value)

    return size >= this.min && size <= this.max
  }
}