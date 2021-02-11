import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'MultiselectSlotMultipleLabel',
  props: {
    values: {
      type: Array,
      required: false
    },
  },
  methods: {
    __(expr, data) {
      return this.el$.__(expr, data)
    }
  },
  setup(props, context) {
    return {
      ...useElementComponent(props, context),
    }
  },
}