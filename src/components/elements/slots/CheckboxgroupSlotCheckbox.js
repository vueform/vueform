export default {
  name: 'CheckboxgroupSlotCheckbox',
  props: {
    el$: {
      type: Object,
      required: true
    },
    item: {
      type: [Object, String, Number, Array],
      required: true
    },
    value: {
      type: [Object, String, Number, Array],
      required: true
    },
  },
  methods: {
    __(expr, data) {
      return this.el$.__(expr, data)
    }
  }
}