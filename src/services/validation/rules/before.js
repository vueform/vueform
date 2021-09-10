import after from './after'
import moment from 'moment'

export default class before extends after {
  checkDate(value) {
    return moment(value, this.format).isBefore(moment(this.date, this.otherFormat))
  }
}