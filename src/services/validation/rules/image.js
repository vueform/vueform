import Validator from './../validator'

export default class image extends Validator {
  check(value) {
    if (this.isFile && !value) {
      return true
    }

    if (!this.isFile || !(value instanceof File) || !value.name) {
      return false
    }

    var extension = value.name.split('.').pop()

    return ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp'].indexOf(extension) !== -1
  }
}