export default {
  props: {
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    fieldName: {
      required: false,
      type: [String],
      '@default': 'name|label'
    }
  }
}