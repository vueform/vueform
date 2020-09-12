import after from './after'

export default class before_or_equal extends after {
  checkDate(value) {
    return moment(value, this.format).isSameOrBefore(moment(this.date, this.otherFormat))
  }
}