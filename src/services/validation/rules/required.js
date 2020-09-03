import Validator from './../validator'
import { filled } from './../helpers'

export default class required extends Validator {
  check(value) {
    return filled(value)
  }
}