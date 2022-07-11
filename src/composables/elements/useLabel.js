import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    label,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const el$ = dependencies.el$

  // ============== COMPUTED ==============

  /**
   * Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component's [`forceLabels`](vueform#option-force-labels) option is `true`.
   * 
   * @type {boolean}
   * 
   */
  const hasLabel = computed(() => {
    return !!(form$.value.options.forceLabels || label.value || el$.value.slots.label || el$.value.$slots?.label || (form$.value.$vueform.vueVersion === 2 && el$.value.$scopedSlots?.label))
  })

  return {
    hasLabel,
  }
}

export default base