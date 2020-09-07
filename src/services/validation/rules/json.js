import Validator from './../validator'
import isJson from './../../../utils/isJson'

export default class json extends Validator {
  check(value) {
    return isJson(value)
  }
}