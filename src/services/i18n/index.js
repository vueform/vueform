import each from 'lodash-es/each'
import get from 'lodash-es/get'
import isPlainObject from 'lodash-es/isPlainObject'
import values from 'lodash-es/values'
import keys from 'lodash-es/keys'

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