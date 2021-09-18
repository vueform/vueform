import { computed } from 'composition-api'
import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'MultiselectMultipleLabel',
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

    // ============== COMPUTED ==============

    /**
     * Whether the multiple label is provided as a slot.
     * 
     * @type {boolean}
     * @private
     */
    const isSlot = computed(() => {
      return !!(el$.value.$slots?.['multiple-label'] || (context.expose === undefined && el$.value.$scopedSlots?.['multiple-label']))
    })
      
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
      isSlot,
      label,
    }
  },
}