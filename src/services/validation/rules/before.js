import after from './after'

export default class before extends after {
  check(value) {
    return moment(value, this.format).isBefore(moment(this.date, this.otherFormat))
  }
}