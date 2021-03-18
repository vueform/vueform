import Validator from './../validator'

export default class date_equals extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      date: this.date,
    }
  }

  get date() {
    return this.attributes[0]
  }

  check(value) {
    return value === this.date
  }
}