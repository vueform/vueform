export default {
  name: 'MultiselectSlotTagsSelection',
  props: {
    el$: {
      type: Object,
      required: true
    },
    search: {
      type: [String, Number],
      required: true
    },
    values: {
      type: Array,
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