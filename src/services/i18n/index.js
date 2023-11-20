import each from 'lodash/each'
import get from 'lodash/get'
import isPlainObject from 'lodash/isPlainObject'
import values from 'lodash/values'
import keys from 'lodash/keys'

export default class {
  constructor(options) {
    this.locales = options.locales
    this.locale = options.locale
    this.fallbackLocale = options.fallbackLocale
  }

  $t(expr, data = {}) {
    let tag = get(this.locales[this.locale], expr) || expr

    if (tag === expr) {
      tag = get(this.locales[this.fallbackLocale], expr) || expr
    }

    each(data, (value, key) => {
      tag = tag.replace(':' + key, value)
    })

    each(data, (value, key) => {
      tag = tag.replace('{' + key + '}', value)
    })

    return tag
  }
}