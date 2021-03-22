import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'FileSlotProgress',
  props: {
    progress: {
      required: true,
      type: [Number],
      default: 0,
    }
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