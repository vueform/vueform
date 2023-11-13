import values from 'lodash-es/values'
import Validator from './../validator'

export default class in_ extends Validator {
  check(value) {
    return values(this.attributes).indexOf(value) !== -1
  }
}