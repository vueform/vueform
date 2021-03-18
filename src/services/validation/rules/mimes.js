import Validator from './../validator'

export default class mimes extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      values: this.accepted.join(', '),
    }
  }

  get accepted () {
    return Object.values(this.attributes).map(a=>a.toLowerCase())
  }

  check(value) {
    if (this.isFile && !value) {
      return true
    }

    if (!this.isFile || !(value instanceof File) || !value.name) {
      return false
    }

    var extension = value.name.split('.').pop()

    return this.accepted.indexOf(extension.toLowerCase()) !== -1
  }
}