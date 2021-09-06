export default {
  props: {
    onChange: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
  }
}