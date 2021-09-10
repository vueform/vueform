import after from './after'
import moment from 'moment'

export default class after_or_equal extends after {
  checkDate(value) {
    return moment(value, this.format).isSameOrAfter(moment(this.date, this.otherFormat))
  }
}