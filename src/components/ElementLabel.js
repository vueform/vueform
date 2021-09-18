import { computed, ref } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'
import useLabel from './../composables/useLabel'

export default {
  name: 'ElementLabel',
  setup(props, context)
  {
    // ============ DEPENDENCIES ============

    const {
      el$,
      form$,
      classes,
      mainClass,
      components,
      theme,
      defaultClasses,
    } = useElementComponent(props, context, {}, {
      addClasses: [
        ['container', computed(() => el$.value.columnsClasses.label ), computed(() => !el$.value.inline)]
      ]
    })

    const {
      label,
      isLabelComponent
    } = useLabel(props, context, { 
      labelDefinition: computed(() => { return el$.value.label }),
      component$: el$,
     })

    // ============== COMPUTED ==============

    /**
     * The name of the element.
     * 
     * @type {string}
     * @private
     */
    const name = computed(() => {
      return el$.value.name
    })

    /**
     * Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component's [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.
     * 
     * @type {boolean}
     * 
     */
    const hasLabel = computed(() => {
      return el$.value.hasLabel
    })
  
    /**
     * Whether the label is provided as a slot.
     * 
     * @type {boolean}
     * @private
     */
    const isSlot = computed(() => {
      return !!(el$.value.slots?.label || el$.value.$slots?.label || (context.expose === undefined && el$.value.$scopedSlots?.label))
    })
  
    /**
     * Returns the slot component if defined in [`slots`](#option-slots) object.
     * 
     * @type {component}
     * @private
     */
    const slotComponent = computed(() => {
      return el$.value.slots?.label || undefined
    })

    return {
      el$,
      form$,
      theme,
      classes,
      mainClass,
      defaultClasses,
      components,
      label,
      isLabelComponent,
      name,
      hasLabel,
      isSlot,
      slotComponent,
    }
  },
}