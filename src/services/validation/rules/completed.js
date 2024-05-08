import Validator from '../validator'

export default class completed extends Validator {
  get debounce() {
    if (this.attributes.debounce !== undefined) {
      return this.attributes.debounce
    }

    if (this.element$.debounce !== null) {
      return this.element$.debounce
    }

    return 1000
  }

  check(value) {
    if (!this.element$.Mask) {
      return this.filled(value)
    }

    const isComplete = this.element$.Mask.masked.currentMask?.isComplete

    return isComplete === undefined || this.element$.empty ? true : isComplete
  }
}