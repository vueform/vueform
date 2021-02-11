import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'CheckboxgroupSlotCheckbox',
  props: {
    item: {
      required: true
    },
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