import Validator from './../validator'

export default class not_in extends Validator {
  check(value) {
    return _.values(this.attributes).indexOf(value) === -1
  }
}