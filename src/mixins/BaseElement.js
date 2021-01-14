export default {
  name: 'BaseElement',
  props: {
    schema: {
      type: Object,
      required: true
    },

    name: {
      type: [Number, String],
      required: true
    },

    parent: {
      type: Object,
      required: false,
      default: () => ({})
    },
    
    embed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
}