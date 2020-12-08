export default {
  name: 'MultiselectSlotTag',
  props: {
    el$: {
      type: Object,
      required: true
    },
    option: {
      required: true
    },
    remove: {
      type: Function,
      required: true
    },
    disabled: {
      type: Boolean,
      required: true
    },
  },
  methods: {
    __(expr, data) {
      return this.el$.__(expr, data)
    }
  }
}