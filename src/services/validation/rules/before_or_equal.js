import after from './after'

export default class before_or_equal extends after {
  check(value) {
    return moment(value, this.format).isSameOrBefore(moment(this.date, this.otherFormat))
  }
}