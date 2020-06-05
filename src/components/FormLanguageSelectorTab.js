import BaseComponent from './../mixins/BaseComponent'
import { mergeComponentClasses } from './../utils/mergeClasses'

export default {
  name: 'FormLanguageSelectorTab',
  mixins: [BaseComponent],
  props: {
    language: {
      type: Object,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
  },
  computed: {
    classes() {
      let classes = this.mergedClasses

      classes = mergeComponentClasses(classes, {
        [this.containers.state]: {
          [classes.active]: this.selected,
          [classes.inactive]: !this.selected,
        }
      })

      return classes
    },

    selected() {
      return this.selectedLanguage == this.code
    },

    selectedLanguage() {
      return this.form$.language
    }
  },
  methods: {
    select() {
      this.$emit('select', this.code)
    }
  }
}