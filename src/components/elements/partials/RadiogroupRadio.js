import { computed, toRefs } from 'composition-api'
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
  },
  setup(props, context)
  {
    const { value } = toRefs(props)

    const {
      el$,
      form$,
      classes,
      mainClass,
      defaultClasses,
      templates,
      theme,
    } = useElementComponent(props, context, {}, {
      addClasses: [
        ['input', 'input_enabled', computed(() => !isDisabled.value)],
        ['input', 'input_disabled', computed(() => isDisabled.value)],
      ]
    })

    // ============== COMPUTED ==============

    /**
     * Whether the radio should be disabled.
     * 
     * @type {boolean}
     */
    const isDisabled = computed(() => {
      return el$.value.disabledItems.map(i=>String(i)).indexOf(String(value.value)) !== -1 || el$.value.isDisabled
    })

    return {
      el$,
      form$,
      classes,
      mainClass,
      defaultClasses,
      templates,
      theme,
      isDisabled,
    }
  },
}