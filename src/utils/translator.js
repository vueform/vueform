export default function(expr, data) {
  if (this.$_isVueI18nInstalled()) {
    return this.$t(expr, data)
  }
  
  if (data === undefined) {
    data = {}
  }

  locale = this.selectedLocale !== undefined ? this.selectedLocale : this.locale

  var tag = _.get(this.$laraform.locales[this[locale]], expr)

  _.each(data, (value, key) => {
    tag = tag.replace(':' + key, value)
  })

  _.each(data, (value, key) => {
    tag = tag.replace('{' + key + '}', value)
  })

  return tag
}