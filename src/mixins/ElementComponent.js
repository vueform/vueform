import MergesElementClasses from './MergesElementClasses'

export default {
  inject: ['el$', 'form$'],
  mixins: [MergesElementClasses],
  computed: {
    theme() {
      return this.el$.theme
    },
    classes() {
      return this.mergedClasses
    },
    components() {
      return this.theme.components
    },
  }
}