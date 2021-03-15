import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'MultiselectSlotNoResults',
  setup(props, context) {
    return {
      ...useElementComponent(props, context),
    }
  },
}