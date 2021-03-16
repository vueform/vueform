export default {
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    conditions: {
      required: false,
      type: [Array],
      default: () => ([])
    },
  }
}