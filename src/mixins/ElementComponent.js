import MergesElementClasses from './MergesElementClasses'
import BaseComponent from './BaseComponent'

export default {
  inject: ['el$', 'form$'],
  mixins: [BaseComponent, MergesElementClasses],
  computed: {
    theme() {
      return this.el$.theme
    }
  }
}