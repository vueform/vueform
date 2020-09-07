import Validator from './../validator'
import normalize from './../../../utils/normalize'

export default class integer extends Validator {
  check(value) {
    let normalized = normalize(String(value).trim())
    
    return normalized === parseInt(normalized, 10)
  }
}