export default {
  text: {
    props: {
      name: {
        required: true,
        type: [String, Number],
      },
      addons: {
        required: false,
        type: Object,
      },
    },
    options: ['addons']
  }
}