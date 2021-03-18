import Validator from './../validator'

export default class file extends Validator {
  check(value) {
    return (!value || value instanceof File) && this.isFile
  }
}