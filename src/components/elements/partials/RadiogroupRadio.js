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
    const { value, item } = toRefs(props)

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
      return el$.value.disabledItems.map(i=>String(i)).indexOf(String(value.value)) !== -1 || el$.value.isDisabled || !!item.value?.disabled
    })

    /**
     * Whether the radio is checked.
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

    // =============== METHODS ==============

    /**
     * Handles `keydown` event.
     * 
     * @param {Event} e* event object 
     * @returns {void}
     * @private
     */
    const handleKeydown = (e) => {
      if (['ArrowRight', 'ArrowDown'].indexOf(e.key) !== -1) {
        e.preventDefault()

        let next = e.target.nextElementSibling

        if (next?.getAttribute('role') === 'radio') {
          next.focus()
        }
      } else if (['ArrowLeft', 'ArrowUp'].indexOf(e.key) !== -1) {
        e.preventDefault()

        let previous = e.target.previousElementSibling

        if (previous?.getAttribute('role') === 'radio') {
          previous.focus()
        }
      }
    }

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
      handleKeydown,
    }
  },
}