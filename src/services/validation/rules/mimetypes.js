import Validator from './../validator'

export default class mimetypes extends Validator {
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

    if (!this.isFile || !(value instanceof File) || !value.type) {
      return false
    }

    return this.accepted.indexOf(value.type.toLowerCase()) !== -1
  }
}