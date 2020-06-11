export default {
  methods: {
    /**
     * Translates an expression to current locale. 
     *
     * @public
     * @param {string} expr expression to be translated using `.` dot syntax.
     * @param {object} data data to be passed for the expression
     * @returns {string}
     */
    __(expr, data) {
      if (this.$_isVueI18nInstalled()) {
        return this.$t(expr, data)
      }
      
      if (data === undefined) {
        data = {}
      }

      let locale = this.selectedLocale !== undefined ? this.selectedLocale : this.locale

      var tag = _.get(this.$laraform.locales[this[locale]], expr)

      _.each(data, (value, key) => {
        tag = tag.replace(':' + key, value)
      })

      _.each(data, (value, key) => {
        tag = tag.replace('{' + key + '}', value)
      })

      return tag
    },

    $_isVueI18nInstalled() {
      return this.$i18n && this.$i18n.constructor && this.$i18n.constructor.name == 'VueI18n' && this.$t !== undefined
    }
  }
}