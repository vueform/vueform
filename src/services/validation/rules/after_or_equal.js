import after from './after'

export default class after_or_equal extends after {
  checkDate(value) {
    return moment(value, this.format).isSameOrAfter(moment(this.date, this.otherFormat))
  }
}