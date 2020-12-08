export default {
  name: 'MultiselectSlotSingleLabel',
  props: {
    el$: {
      type: Object,
      required: true
    },
    value: {
      required: true
    },
  },
  methods: {
    __(expr, data) {
      return this.el$.__(expr, data)
    }
  }
}