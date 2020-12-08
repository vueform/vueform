export default {
  name: 'MultiselectSlotMultipleLabel',
  props: {
    el$: {
      type: Object,
      required: true
    },
    values: {
      type: Array,
      required: false
    },
  },
  methods: {
    __(expr, data) {
      return this.el$.__(expr, data)
    }
  }
}