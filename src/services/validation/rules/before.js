import after from './after'

export default class before extends after {
  checkDate(value) {
    return this.moment(value, this.format).isBefore(this.moment(this.date, this.otherFormat))
  }
}