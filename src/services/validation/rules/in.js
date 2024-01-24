import values from 'lodash/values'
import Validator from './../validator'
import normalize from './../../../utils/normalize'

export default class in_ extends Validator {
  check(value) {
    console.log(values(this.attributes))
    return values(this.attributes).indexOf(normalize(String(value).trim())) !== -1
  }
}