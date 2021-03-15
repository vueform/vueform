import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'MultiselectSlotMultipleLabel',
  props: {
    values: {
      type: Array,
      required: false
    },
  },
  setup(props, context) {
    return {
      ...useElementComponent(props, context),
    }
  },
}