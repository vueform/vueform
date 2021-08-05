import _ from 'lodash'
import Validator from './../validator'

export default class in_ extends Validator {
  check(value) {
    return _.values(this.attributes).indexOf(value) !== -1
  }
}