import ElementComponent from './../mixins/ElementComponent'
import htmlIf from './../directives/html-if'

export default {
  name: 'InputAddon',
  directives: {
    htmlIf,
  },
  mixins: [ElementComponent],
  props: {
    type: {
      required: true,
      type: String
    },
  },
  computed: {
    baseAddon() {
      return this.el$.addon[this.type]
    },
    addon() {
      return this.isAddonFunction
        ? this.baseAddon(this.el$)
        : this.baseAddon || null
    },
    isAddonFunction() {
      return typeof this.baseAddon === 'function' && 
             (!this.baseAddon.prototype || !this.baseAddon.prototype.constructor || (this.baseAddon.prototype.constructor && this.baseAddon.prototype.constructor.name !== 'VueComponent'))
    },
    isAddonComponent() {
      return typeof this.baseAddon === 'function' && 
             this.baseAddon.prototype &&
             this.baseAddon.prototype.constructor.name === 'VueComponent'
    },
  }
}