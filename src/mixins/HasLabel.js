import htmlIf from './../directives/html-if'

export default {
  directives: {
    htmlIf,
  },
  computed: {
    descriptor() {
      throw new Error('"descriptor" must return a valid descriptor object')
    },
    label() {
      return this.isLabelFunction
        ? this.descriptor.label(this.el$)
        : this.descriptor.label || null
    },
    isLabelFunction() {
      return typeof this.descriptor.label === 'function' && 
             !this.descriptor.label.prototype
    },
    isLabelComponent() {
      return typeof this.descriptor.label === 'function' && 
             this.descriptor.label.prototype &&
             this.descriptor.label.prototype.constructor.name === 'VueComponent'
    },
  }
}