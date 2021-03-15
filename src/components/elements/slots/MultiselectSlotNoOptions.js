import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'MultiselectSlotNoOptions',
  setup(props, context) {
    return {
      ...useElementComponent(props, context),
    }
  },
}