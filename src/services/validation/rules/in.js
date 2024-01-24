import values from 'lodash/values'
import Validator from './../validator'
import normalize from './../../../utils/normalize'

export default class in_ extends Validator {
  check(value) {
    return values(this.attributes).indexOf(normalize(String(value).trim())) !== -1
  }
}