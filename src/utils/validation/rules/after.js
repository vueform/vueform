import Rule from './rule'
import helpers from './helpers'

const After = class extends Rule {
  get params() {
    return {
      0: 'date',
    }
  }

  init() {
    var other = this.attributes[0]

    this.form$.$nextTick(() => {
      if (isNaN(Date.parse(other)) && ['today', 'tomorrow', 'yesterday'].indexOf(other) === -1) {
        if (this.form$.el$(other) === null) {
          throw new Error(other + ' element does not exist')
        }
        
        this.watchOther(other)

        // this.form$.$watch('model.' + this.other.path, () => {
        //   this.refreshMessageWith({
        //     date: this.other.value
        //   })
        // })
      }
    })
    // else {
    //   this.refreshMessageWith({
    //     date: this.attributes[0]
    //   })
    // }
  }

  validate(value) {
    if (this.other) {
      var after = this.other.value
    }
    else {
      var after = this.attributes[0]

      if (after === 'today') {
        after = moment().startOf('day')
      }

      if (after === 'tomorrow') {
        after = moment().startOf('day').add(1, 'days')
      }

      if (after === 'yesterday') {
        after = moment().startOf('day').substract(1, 'days')
      }
    }

    if (_.isObject(value)) {
      var valid = true

      _.each(value, (one) => {
        if (!valid) {
          return false
        }

        if (!this._checkDate(one, after)) {
          valid = false
        }
      })

      return valid
    } else {
      return this._checkDate(value, after)
    }
  }

  _checkDate(actual, other) {
    return moment(actual).format('X') > moment(other).format('X')
  }
}

export default After