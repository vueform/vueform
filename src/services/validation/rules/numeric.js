import Validator from './../validator'

export default class numeric extends Validator {
  check(value) {
    return !isNaN(parseFloat(value)) && isFinite(value) && !/\s/.test(String(value)) && !Boolean(String(value).match(/^0x[0-9a-f]+$/i))
  }
}