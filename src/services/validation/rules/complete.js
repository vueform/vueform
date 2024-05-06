import Validator from './../validator'

export default class complete extends Validator {
  get debounce() {
    if (this.attributes.debounce) {
      return this.attributes.debounce
    }

    if (this.element$.debounce) {
      return this.element$.debounce
    }

    return 1000
  }

  check(value) {
    return this.element$.Mask ? this.element$.Mask.masked.currentMask.isComplete : this.filled(value)
  }
}