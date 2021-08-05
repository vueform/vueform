import _ from 'lodash'

export default class {
  constructor(options) {
    this.locales = options.locales
    this.locale = options.locale
    this.fallbackLocale = options.fallbackLocale
  }

  $t(expr, data = {}) {
    let tag = _.get(this.locales[this.locale], expr) || expr

    if (tag === expr) {
      tag = _.get(this.locales[this.fallbackLocale], expr) || expr
    }

    _.each(data, (value, key) => {
      tag = tag.replace(':' + key, value)
    })

    _.each(data, (value, key) => {
      tag = tag.replace('{' + key + '}', value)
    })

    return tag
  }
}