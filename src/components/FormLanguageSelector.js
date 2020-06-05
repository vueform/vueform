import BaseComponent from './../mixins/BaseComponent'
import Localized from './../mixins/Localized'

export default {
  mixins: [BaseComponent, Localized],
  name: 'FormLanguageSelector',
  computed: {
    language() {
      return this.form$.language
    },
    languages() {
      return this.form$.languages
    },
  },
  methods: {
    select(language) {
      this.$emit('changeLanguage', language)
    },
  },
}