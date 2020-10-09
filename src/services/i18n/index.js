export default class {
  constructor(options) {
    this.locales = options.locales
    this.locale = options.locale
  }

  $t(expr, data = {}) {
    let tag = _.get(this.locales[this.locale], expr) || expr

    _.each(data, (value, key) => {
      tag = tag.replace(':' + key, value)
    })

    _.each(data, (value, key) => {
      tag = tag.replace('{' + key + '}', value)
    })

    return tag
  }
}