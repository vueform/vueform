import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'MultiselectSlotSingleLabel',
  props: {
    value: {
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