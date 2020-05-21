import _ from 'lodash'
import ElementComponent from './../../mixins/ElementComponent'
import { mergeComponentClasses } from './../../utils/mergeClasses'

export default {
  name: 'BaseElementLayout',
  mixins: [ElementComponent],
  computed: {
    classes() {
      let classes = this.mergedClasses

      // Add element's class to main class
      if (this.el$.class !== null) {
        classes = mergeComponentClasses(classes, {
          [this.mainClass]: this.el$.class
        })
      }

      return classes
    },
    mainClass() {
      return _.keys(this.defaultClasses)[0]
    }
  }
}