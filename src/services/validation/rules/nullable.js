import Validator from './../validator'

export default class nullable extends Validator {
  check(value) {
    return true
  }
}