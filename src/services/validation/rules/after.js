import Validator from './../validator'

export default class after extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      date: this.date,
    }
  }

  get date() {
    return this.attributes[0]
  }

  get dateType() {
    if (['today', 'tomorrow', 'yesterday'].indexOf(this.date) !== -1) {
      return 'relative'
    } else if (this.form$.el$(this.date)) {
      return 'element'
    } else {
      return 'absolute'
    }
  }

  check(value) {
    let date = ''

    switch (this.dateType) {
      case 'relative':
        if (this.date === 'today') {
          date = moment().startOf('day')
        }

        if (this.date === 'tomorrow') {
          date = moment().startOf('day').add(1, 'days')
        }

        if (this.date === 'yesterday') {
          date = moment().startOf('day').substract(1, 'days')
        }
        break

      case 'element':
        date = this.form$.el$(this.date).value
        break

      case 'absolute':
        date = this.date
        break
    }

    return this.checkDate(value, date)
  }

  checkDate(actual, expected) {
    return moment(actual).format('X') > moment(expected).format('X')
  }
}