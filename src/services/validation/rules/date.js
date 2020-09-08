import Validator from './../validator'
import strtotime from 'locutus/php/datetime/strtotime'

export default class date extends Validator {
  check(value) {
    return !!strtotime(value)
  }
}