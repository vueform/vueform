import each from 'lodash/each'
import values from 'lodash/values'
import Validator from './../validator'
import pregQuote from './../../../utils/pregQuote'
import flattenKeys from './../../../utils/flattenKeys'

export default class distinct extends Validator {
  check(value) {
    let attribute = this.element$.path
    let attributeName = attribute.replace(/\d+(?!\d+)/, '*')
    let rootVariable = attribute.match(/^[\w-]+/)[0]
    let attributeData = {
      [rootVariable]: this.form$.data[rootVariable]
    }

    let pattern = pregQuote(attributeName, '#').replace('\\*', '[^.]+')

    let data = {}

    each(flattenKeys(attributeData), (v, k) => {
      if (k != attribute && k.match('^' + pattern + '$') !== null) {
        data[k] = v
      }
    })

    return !(values(data).indexOf(value) !== -1)
  }
}