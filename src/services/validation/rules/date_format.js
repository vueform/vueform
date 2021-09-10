import Validator from './../validator'
import moment from 'moment'

export default class date_format extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      format: this.format,
    }
  }

  get format() {
    return this.attributes[0]
  }

  check(value) {
    return value && moment(value, this.format).format(this.format) === value
  }
}