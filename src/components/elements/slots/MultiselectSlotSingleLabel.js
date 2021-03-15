import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'MultiselectSlotSingleLabel',
  props: {
    value: {
      required: true
    },
  },
  setup(props, context) {
    return {
      ...useElementComponent(props, context),
    }
  },
}