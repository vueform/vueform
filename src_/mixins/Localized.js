export default {
  inject: ['locale'],
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
      if (data === undefined) {
        data = {}
      }

      var translation = _.get(this.locale, expr)

      _.each(data, (value, key) => {
        translation = translation.replace(':' + key, value)
      })

      _.each(data, (value, key) => {
        translation = translation.replace('{' + key + '}', value)
      })

      return translation
    }
  }
}