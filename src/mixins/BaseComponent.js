import MergesThemeClasses from './MergesThemeClasses'

export default {
  inject: ['form$', 'theme'],
  mixins: [MergesThemeClasses],
  computed: {
    classes() {
      return this.mergedClasses
    },
    components() {
      return this.theme.components
    },
  }
}