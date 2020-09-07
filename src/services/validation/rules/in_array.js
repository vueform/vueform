import Validator from './../validator'
import replaceWildcards from './../../../utils/replaceWildcards'

export default class in_array extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      other: this.other$.genericName,
    }
  }

  get other$() {
    return this.form$.el$(replaceWildcards(this.otherPath, this.element$.path))
  }

  get otherPath() {
    var matches = this.attributes[0].match(/.*(?=\.\*)/)

    if (matches === null) {
      throw new Error('in_array rule\'s other attribute should end with .*')
    }

    return matches[0]
  }

  init() {
    this.watchOther()
  }

  check(value) {
    var data = this.other$.value

    if (!data) {
      return false
    }

    return data.indexOf(value) !== -1
  }
}