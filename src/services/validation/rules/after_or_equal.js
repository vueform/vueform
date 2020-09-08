import after from './after'

export default class after_or_equal extends after {
  check(value) {
    return moment(value, this.format).isAfter(moment(this.date, this.otherFormat))
        || moment(value, this.format).isSame(moment(this.date, this.otherFormat))
  }
}