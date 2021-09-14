import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'MultiselectSlotMultipleLabel',
  props: {
    values: {
      type: Array,
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
      
    // ============== METHODS ===============

    /**
     * Returns the label to display.
     * 
     * @returns {string}
     */
    const label = (values) => {
      return el$.value.fieldOptions.multipleLabel(values)
    }

    return {
      el$,
      form$,
      classes,
      mainClass,
      defaultClasses,
      components,
      theme,
      label,
    }
  },
}