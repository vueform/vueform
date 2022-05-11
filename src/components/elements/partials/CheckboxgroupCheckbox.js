import { computed, toRefs, inject } from 'composition-api'
import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'CheckboxgroupCheckbox',
  props: {
    item: {
      type: [Object, String, Number],
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    items: {
      type: [Object, Array],
      required: true
    },
    index: {
      type: [Number],
      required: true
    },
  },
  setup(props, context)
  {
    const { value } = toRefs(props)

    const {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme,
    } = useElementComponent(props, context)

    // ============== COMPUTED ==============

    /**
     * Whether the checkbox should be disabled.
     * 
     * @type {boolean}
     */
    const isDisabled = computed(() => {
      return el$.value.disabledItems.map(i=>String(i)).indexOf(String(value.value)) !== -1 || el$.value.isDisabled
    })

    /**
     * The `id` attribute of the input.
     * 
     * @type {boolean}
     */
    const id = computed(() => {
      return `${el$.value.fieldId}-${value.value}`
    })

    /**
     * The `name` attribute of the input.
     * 
     * @type {boolean}
     */
    const name = computed(() => {
      return `${el$.value.path}-${value.value}`
    })

    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme,
      isDisabled,
      id,
      name
    }
  },
}