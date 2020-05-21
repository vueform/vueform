import _ from 'lodash'
import { mergeComponentClasses } from './../../utils/mergeClasses'

export default {
  name: 'BaseElementLayout',
  inject: ['el$', 'form$'],
  computed: {
    theme() {
      return this.el$.theme
    },
    classes() {
      let classes = _.merge({},
        // Default component classes
        this.defaultClasses,

        // Theme / form level overwrites
        this.theme.classes[this.$options.name] || {},

        // Element level overwrites
        this.el$.classes[this.$options.name] || {}
      )

      // Add form's addClasses if classes is not defined in element
      if (_.isEmpty(this.el$.classes[this.$options.name])) {
        classes = mergeComponentClasses(classes, this.form$.addClasses[this.$options.name] || null)
      }

      // Add element's addClasses options
      classes = mergeComponentClasses(classes, this.el$.addClasses[this.$options.name] || null)

      return classes
    },
  }
}