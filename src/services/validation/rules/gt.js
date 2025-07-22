import Validator from './../validator'
import replaceWildcards from './../../../utils/replaceWildcards'

export default class gt extends Validator {
  get messageParams() {
    let value = this.other$.value != null ? this.size(this.other$.value, this.other$) : 0

    if (isNaN(value) || value < 0) {
      value = 0
    }

    return {
      attribute: this.attributeName,
      value,
    }
  }

  get otherPath() {
    return this.attributes[0]
  }

  get other$() {
    return this.form$.el$(replaceWildcards(this.otherPath, this.element$.path))
  }

  init() {
    this.watchOther()
  }

  check(value) {
    let otherValue = this.other$.value

    return this.compare(value, otherValue)
  }

  compare(value, otherValue) {
    let otherSize = this.size(otherValue, this.other$)

    return otherSize == 0 || this.size(value) > otherSize
  }
}