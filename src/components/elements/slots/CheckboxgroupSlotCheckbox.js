export default {
  name: 'CheckboxgroupSlotCheckbox',
  props: {
    el$: {
      type: Object,
      required: true
    },
    item: {
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