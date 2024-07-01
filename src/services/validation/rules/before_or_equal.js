import after from './after'

export default class before_or_equal extends after {
  checkDate(value) {
    return this.moment(value, this.format).isSameOrBefore(this.moment(this.date, this.otherFormat))
  }
}