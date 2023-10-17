import { computed } from 'vue'
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
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme,
    } = useElementComponent(props, context)

    const {
      label,
      isLabelComponent,
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
      return el$.value.fieldId
    })

    /**
     * The `id` attribute of the container.
     *
     * @type {string}
     */
    const id = computed(() => {
      return el$.value.labelId
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
      return !!(el$.value.slots?.label || el$.value.$slots?.label || /* istanbul ignore next: Vue2 is not checked */  (form$.value.$vueform.vueVersion === 2 && el$.value.$scopedSlots?.label))
    })

    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
      label,
      isLabelComponent,
      name,
      id,
      hasLabel,
      isSlot,
    }
  },
}