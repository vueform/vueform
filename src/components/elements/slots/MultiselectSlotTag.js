export default {
  name: 'MultiselectSlotTag',
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
      type: Function,
      required: true
    },
    remove: {
      type: Function,
      required: true
    },
  },
  methods: {
    __(expr, data) {
      return this.el$.__(expr, data)
    }
  }
}