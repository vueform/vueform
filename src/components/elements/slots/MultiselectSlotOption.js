export default {
  name: 'MultiselectSlotOption',
  props: {
    el$: {
      type: Object,
      required: true
    },
    option: {
      type: Object,
      required: true
    },
    search: {
      type: [String, Number],
      required: false
    },
  },
  methods: {
    __(expr, data) {
      return this.el$.__(expr, data)
    }
  }
}