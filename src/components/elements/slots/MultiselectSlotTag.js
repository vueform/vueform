import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'MultiselectSlotTag',
  props: {
    option: {
      required: true
    },
    remove: {
      type: Function,
      required: true
    },
    disabled: {
      type: Boolean,
      required: true
    },
  },
  setup(props, context)
  {
    const {
      el$,
      form$,
      classes,
      mainClass,
      defaultClasses,
      components,
      theme,
    } = useElementComponent(props, context)

    return {
      el$,
      form$,
      classes,
      mainClass,
      defaultClasses,
      components,
      theme,
    }
  },
}