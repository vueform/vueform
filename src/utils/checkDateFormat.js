import moment from 'moment'

export default function (format, date) {
    if(!(date instanceof Date) && moment(date, format).format(format) !== date) {
      console.warn(`Wrong formatted date. Expected format: "${format}", received: "${date}"`)
    }
  }