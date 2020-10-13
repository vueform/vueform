import _ from 'lodash'
import { mergeComponentClasses } from './../utils/mergeClasses'

export default {
  computed: {
    mergedClasses() {
      let classes = _.merge({},
        // Default component classes
        this.defaultClasses,

        // Theme / form level overwrites
        this.theme.classes[this.$options.name] || {},

        // Element level overwrites
        this.el$.value.schema.classes ? this.el$.value.schema.classes[this.$options.name] : {}
      )

      // Add form's addClasses if classes is not defined in element
      if (!this.el$.value.schema.classes || _.isEmpty(this.el$.value.schema.classes[this.$options.name])) {
        classes = mergeComponentClasses(classes, this.form$.addClasses[this.$options.name] || null)
      }

      // Add element's addClasses options
      classes = mergeComponentClasses(classes, this.el$.value.addClasses[this.$options.name] || null)

      return classes
    },
  }
}