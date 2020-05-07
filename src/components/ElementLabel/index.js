import htmlIf from './../../directives/html-if'

export default {
  name: 'ElementLabel',
  directives: {
    htmlIf,
  },
  inject: ['el$', 'theme'],
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