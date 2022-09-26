import { computed, toRefs } from 'vue'
import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'RadiogroupRadio',
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
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
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
     * Whether the radio should be disabled.
     * 
     * @type {boolean}
     */
    const isDisabled = computed(() => {
      return el$.value.disabledItems.map(i=>String(i)).indexOf(String(value.value)) !== -1 || el$.value.isDisabled
    })

    /**
     * Whether the checkbox is checked.
     * 
     * @type {boolean}
     */
    const checked = computed(() => {
      return el$.value.value === String(value.value) || el$.value.value === Number(value.value)
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
      return el$.value.path
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
      name,
      checked,
    }
  },
}