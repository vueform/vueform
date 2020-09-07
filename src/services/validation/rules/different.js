import Validator from './../validator'
import replaceWildcards from './../../../utils/replaceWildcards'

export default class different extends Validator {
  get otherPath() {
    return this.attributes[0]
  }

  get other$() {
    return this.form$.el$(replaceWildcards(this.otherPath, this.element$.path))
  }

  get messageParams() {
    return {
      attribute: this.attributeName,
      other: this.other$.genericName,
    }
  }

  init() {
    this.watchOther()
  }

  check(value) {
    if (!this.filled(value) && !this.filled(this.other$.value)) {
      return true
    }

    return value != this.other$.value
  }
}