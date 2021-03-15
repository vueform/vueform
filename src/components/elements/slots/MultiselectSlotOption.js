import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'MultiselectSlotOption',
  props: {
    option: {
      required: true
    },
    search: {
      required: false
    },
  },
  setup(props, context) {
    return {
      ...useElementComponent(props, context),
    }
  },
}