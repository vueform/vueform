import _ from 'lodash'
import { mergeComponentClasses } from './../utils/mergeClasses'

export default {
  inject: ['form$', 'theme'],
  computed: {
    classes() {
      let classes = _.merge({},
        // Default component classes
        this.defaultClasses,

        // Theme / form level overwrites
        this.theme.classes[this.$options.name] || {}
      )

      // Add form's addClasses
      classes = mergeComponentClasses(classes, this.form$.addClasses[this.$options.name] || null)

      return classes
    },
  }
}