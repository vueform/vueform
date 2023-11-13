// import _ from 'lodash'
import values from 'lodash/values'
import Validator from './../validator'

export default class not_in extends Validator {
  check(value) {
    return _.values(this.attributes).indexOf(value) === -1
  }
}