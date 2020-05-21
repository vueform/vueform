import ElementComponent from './../../mixins/ElementComponent'
import htmlIf from './../../directives/html-if'

export default {
  name: 'ElementLabel',
  directives: {
    htmlIf,
  },
  mixins: [ElementComponent],
  computed: {
    name() {
      return this.el$.name
    },
    label() {
      return this.el$.schema.label
    },
    isFunction() {
      return typeof this.label === 'function'
    },
    isComponent() {
      return typeof this.label === 'object'
    },
  }
}