import Rule from './rule'
import helpers from './helpers'

const Gt = class extends Rule {

  get params() {
    return {
      0: 'other'
    }
  }

  init() {
    this.other = this.watchOther(this.attributes[0])

    // this.form$.$watch('model.' + this.other.path, () => {
    //   this.refreshMessageWith({
    //     value: helpers.getSizeByType(this.other.value, helpers.getValueType(this))
    //   })
    // })
  }

  selectMessage(message) {
    return helpers.selectSizeMessage(this, message)
  }

  validate(value) {
    var type = helpers.getValueType(this)

    helpers.requireSameType(value, this.other.value)

    var thisValue = helpers.getSizeByType(value, type)
    var otherValue = helpers.getSizeByType(this.other.value, type)

    return thisValue > otherValue
  }
}

export default Gt