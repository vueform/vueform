import { computed, ref } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'
import useLabel from './../composables/useLabel'

export default {
  name: 'ElementLabel',
  slots: ['default', 'info'],
  setup(props, context)
  {
    // ============ DEPENDENCIES ============

    const {
      el$,
      form$,
      $size,
      classes,
      templates,
      template,
      theme,
    } = useElementComponent(props, context)

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
     * Whether the element has a `label` option, a `#label` slot or `Vueform` component's [`forceLabels`](vueform#force-labels) option is `true`.
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

    return {
      el$,
      form$,
      $size,
      theme,
      classes,
      templates,
      template,
      label,
      isLabelComponent,
      name,
      hasLabel,
      isSlot,
    }
  },
}