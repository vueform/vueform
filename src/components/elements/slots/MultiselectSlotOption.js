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