import moment from 'moment'

export default function (format, date) {
    if(!(date instanceof Date) && moment(date, format).format(format) !== date) {
      throw new Error(`Wrong formatted date. Expected format: "${format}", received: "${date}"`)
    }
  }