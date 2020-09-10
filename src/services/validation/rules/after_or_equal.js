import after from './after'

export default class after_or_equal extends after {
  check(value) {
    return moment(value, this.format).isSameOrAfter(moment(this.date, this.otherFormat))
  }
}