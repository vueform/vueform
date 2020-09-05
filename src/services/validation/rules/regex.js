import Validator from './../validator'

export default class regex extends Validator {
  check(value) {
    var regex = new RegExp(this.attributes[0].replace(/^\/|\/[^\/]*$/g, ''))

    return regex.test(value)
  }
}