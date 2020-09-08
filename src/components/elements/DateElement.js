import TextElement from './../../components/elements/TextElement'

export default {
  name: 'DateElement',
  mixins: [TextElement],
  computed: {
    dataFormat: {
      get() {
        return this.schema.dataFormat || this.__('laraform.elements.date.dataFormat')
      },
      set(value) {
        this.$set(this.schema, 'dataFormat', value)
      }
    },
    hasDate() {
      return true
    },
    hasTime() {
      return false
    },
  },
}