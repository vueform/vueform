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
    
    embed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
}