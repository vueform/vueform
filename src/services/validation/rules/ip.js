import Validator from './../validator'
import { ipv4 } from './ipv4'
import { ipv6 } from './ipv6'

export default class ip extends Validator {
  check(value) {
    return ipv4(value) || ipv6(value)
  }
}