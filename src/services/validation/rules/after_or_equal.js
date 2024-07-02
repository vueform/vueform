import after from './after'

export default class after_or_equal extends after {
  checkDate(value) {
    return this.moment(value, this.format).isSameOrAfter(this.moment(this.date, this.otherFormat))
  }
}