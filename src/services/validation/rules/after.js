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
    if (this.element$.dataFormat) {
      return this.element$.dataFormat
    }

    if (this.element$.hasTime) {
      return this.element$.__('laraform.elements.datetime.secondsDataFormat')
    }

    return this.element$.__('laraform.elements.date.dataFormat')
  }

  get otherFormat() {
    if (this.dateType != 'element') {
      return this.format
    }

    if (this.other$.dataFormat) {
      return this.other$.dataFormat
    }

    return this.format
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
    return moment(value, this.format).isAfter(moment(this.date, this.otherFormat))
  }
}