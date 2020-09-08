import Validator from './../validator'
import replaceWildcards from './../../../utils/replaceWildcards'

export default class gt extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      value: this.other$.value != null ? this.size(this.other$.value) : 0,
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
    let otherSize = this.size(otherValue)

    return otherSize == 0 || this.size(value) > otherSize
  }
}