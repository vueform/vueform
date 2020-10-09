import _ from 'lodash'
import ElementComponent from './../mixins/ElementComponent'
import { mergeComponentClasses } from './../utils/mergeClasses'

export default {
  name: 'BaseElementLayout',
  mixins: [ElementComponent],
  computed: {
    hasLabel() {
      return this.el$.hasLabel
    },
    classes() {
      let classes = this.mergedClasses

      classes = mergeComponentClasses(classes, {
        [this.containers.element]: this.el$.columns.classes.element || '',
        [this.containers.label]: this.el$.columns.classes.label || '',
        [this.containers.field]: this.el$.columns.classes.field || '',
      })

      // Add element's class to main class
      if (this.el$.class !== null) {
        classes = mergeComponentClasses(classes, {
          [this.mainClass]: this.el$.class
        })
      }

      return classes
    },
    before() {
      return this.el$.before
    },
    between() {
      return this.el$.between
    },
    after() {
      return this.el$.after
    },
    description() {
      return this.el$.description
    },
    visible (){
      return this.el$.visible
    } 
  }
}