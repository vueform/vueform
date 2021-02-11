import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'RadiogroupSlotRadio',
  props: {
    item: {
      type: [Object, String, Number, Array],
      required: true
    },
    value: {
      type: [Object, String, Number, Array],
      required: true
    },
  },
  setup(props, context) {
    return {
      ...useElementComponent(props, context),
    }
  },
}