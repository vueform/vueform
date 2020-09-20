export default {
  name: 'MultiselectSlotNoResult',
  props: {
    el$: {
      type: Object,
      required: true
    },
  },
  methods: {
    __(expr, data) {
      return this.el$.__(expr, data)
    }
  }
}