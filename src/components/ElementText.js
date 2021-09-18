import { computed, toRefs } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementText',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  setup(props, context)
  {
    const { type } = toRefs(props)

    // ============ DEPENDENCIES ============

    const {
      el$,
      form$,
      classes,
      components,
      mainClass,
      theme,
      defaultClasses,
    } = useElementComponent(props, context, {}, {
      addClasses: [
        ['container', 'container_before', computed(() => type.value == 'before')],
        ['container', 'container_between', computed(() => type.value == 'between')],
        ['container', 'container_after', computed(() => type.value == 'after')],
      ]
    })

    // ============== COMPUTED ==============

    /**
     * The value of the content type.
     * 
     * @type {string}
     * @private
     */
    const content = computed(() => {
      return el$.value[type.value]
    })

    /**
     * Whether the contents are provided as a slot.
     * 
     * @type {boolean}
     * @private
     */
    const isSlot = computed(() => {
      return !!(el$.value.slots?.[type.value] || el$.value.$slots?.[type.value] || (context.expose === undefined && el$.value.$scopedSlots?.[type.value]))
    })
  
    /**
     * Returns the slot component if defined in [`slots`](#option-slots) object.
     * 
     * @type {component}
     * @private
     */
    const slotComponent = computed(() => {
      return el$.value.slots?.[type.value] || undefined
    })

    return {
      el$,
      form$,
      theme,
      classes,
      mainClass,
      defaultClasses,
      components,
      content,
      isSlot,
      slotComponent,
    }
  },
}