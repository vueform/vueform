import Validator from './../validator'

export default class boolean extends Validator {
  check(value) {
    var accepted = [true, false, 0, 1, '0', '1']

    return accepted.indexOf(value) !== -1
  }
}