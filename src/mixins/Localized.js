import _ from 'lodash'
import isVueI18nInstalled from './../utils/isVueI18nInstalled'
import translator from './../utils/translator'

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
    __: translator,

    $_isVueI18nInstalled: isVueI18nInstalled
  }
}