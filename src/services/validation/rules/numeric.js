import Validator from './../validator'

export default class numeric extends Validator {
  check(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
}