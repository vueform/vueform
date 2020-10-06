import BaseComponent from './../mixins/BaseComponent'

export default {
  mixins: [BaseComponent],
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