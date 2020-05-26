import ElementComponent from './../mixins/ElementComponent'
import htmlIf from './../directives/html-if'

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
      return this.isFunction
        ? this.el$.schema.label(this.el$)
        : this.el$.schema.label || null
    },
    isFunction() {
      return typeof this.el$.schema.label === 'function' && 
             !this.el$.schema.label.prototype
    },
    isComponent() {
      return typeof this.el$.schema.label === 'function' && 
             this.el$.schema.label.prototype &&
             this.el$.schema.label.prototype.constructor.name === 'VueComponent'
    },
  }
}