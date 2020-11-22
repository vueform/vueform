export default {
  name: 'MultiselectSlotTagsSelection',
  props: {
    el$: {
      type: Object,
      required: true
    },
    search: {
      required: true
    },
    values: {
      required: false
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