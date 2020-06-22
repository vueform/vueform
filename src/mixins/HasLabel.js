import htmlIf from './../directives/html-if'

export default {
  directives: {
    htmlIf,
  },
  computed: {
    descriptor() {
      throw new Error('"descriptor" must return a valid descriptor object')
    },
    baseLabel() {
      return this.descriptor.label
    },
    label() {
      return this.isLabelFunction
        ? this.baseLabel(this.el$ || this.form$)
        : this.baseLabel || null
    },
    isLabelFunction() {
      return typeof this.baseLabel === 'function' && 
             (!this.baseLabel.prototype || !this.baseLabel.prototype.constructor || (this.baseLabel.prototype.constructor && this.baseLabel.prototype.constructor.name !== 'VueComponent'))
    },
    isLabelComponent() {
      return typeof this.baseLabel === 'function' && 
             this.baseLabel.prototype &&
             this.baseLabel.prototype.constructor.name === 'VueComponent'
    },
  }
}