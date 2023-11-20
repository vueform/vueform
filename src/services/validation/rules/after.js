import isArray from 'lodash/isArray'
import each from 'lodash/each'
import moment from 'moment'
import Validator from './../validator'

export default class after extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      date: this.date.format(this.format),
    }
  }

  get param() {
    return this.attributes[0]
  }

  get format() {
    return ['date', 'dates'].indexOf(this.element$.type) !== -1 && this.element$.valueFormat
      ? this.element$.valueFormat
      : 'YYYY-MM-DD'
  }

  get otherFormat() {
    if (this.dateType != 'element') {
      return this.format
    }

    return ['date', 'dates'].indexOf(this.other$.type) !== -1 && this.other$.valueFormat
      ? this.other$.valueFormat
      : this.format
  }

  get otherPath() {
    if (this.dateType != 'element') {
      return null
    }

    return this.param
  } 

  get other$() {
    if (this.dateType != 'element') {
      return {}
    }

    return this.form$.el$(this.param)
  } 

  get date() {
    let date = ''

     switch (this.dateType) {
      case 'relative':
        if (this.param === 'today') {
          date = moment().startOf('day')
        }

        if (this.param === 'tomorrow') {
          date = moment().startOf('day').add(1, 'days')
        }

        if (this.param === 'yesterday') {
          date = moment().startOf('day').subtract(1, 'days')
        }
        break

      case 'element':
        date = moment(this.other$.value, this.otherFormat)
        break

      case 'absolute':
        date = moment(this.param, this.format)
        break
    }

    return date
  }

  get dateType() {
    if (['today', 'tomorrow', 'yesterday'].indexOf(this.param) !== -1) {
      return 'relative'
    } else if (this.form$.el$(this.param)) {
      return 'element'
    } else {
      return 'absolute'
    }
  }

  init() {
    this.form$.$nextTick(() => {
      if (this.dateType == 'element') {
        this.watchOther()
      }
    })
  }

  check(value) {
    if (isArray(value)) {
      let valid = true

      each(value, (date) => {
        if (!this.checkDate(date)) {
          valid = false
        }
      })

      return valid
    }

    return this.checkDate(value)
  }

  checkDate(value) {
    return moment(value, this.format).isAfter(moment(this.date, this.otherFormat))
  }
}