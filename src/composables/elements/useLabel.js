import { computed, toRefs, inject } from 'vue'
import isVueComponent from './../../utils/isVueComponent'
import localize from './../../utils/localize'

const base = function(props, context, dependencies)
{
  const {
    label,
  } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const form$ = dependencies.form$
  const el$ = dependencies.el$
  
  // =============== INJECT ===============
  
  const config$ = inject('config$')
  
  // ============== COMPUTED ==============
  
  /**
   * Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component's [`forceLabels`](vueform#option-force-labels) option is `true`.
   *
   * @type {boolean}
   *
   */
  const hasLabel = computed(() => {
    return !!(form$.value.options.forceLabels || label.value || el$.value.slots.label || el$.value.$slots?.label || /* istanbul ignore next: vue2 */ (form$.value.$vueform.vueVersion === 2 && el$.value.$scopedSlots?.label))
  })
  
  /**
   * Whether the label is provided as a function.
   *
   * @type {boolean}
   * @private
   */
  const isLabelFunction = computed(() => {
    return typeof label.value === 'function' && (!label.value.prototype || !label.value.prototype.constructor || (label.value.prototype.constructor && label.value.prototype.constructor.name !== 'VueComponent'))
  })
  
  /**
   * Whether label is provided as a Vue component.
   *
   * @type {boolean}
   * @private
   */
  const isLabelComponent = computed(() => {
    return isVueComponent(label.value)
  })
  
  /**
   * The localized label of the element.
   *
   * @type {string|Component}
   * @private
   */
  const Label = computed(() => {
    let Label = isLabelFunction.value ? label.value(el$.value) : label.value || null
    
    /* istanbul ignore else */
    if (!isLabelComponent.value) {
      Label = localize(Label, config$.value, form$.value)
    }
    
    return Label
  })
  
  return {
    hasLabel,
    Label,
  }
}

export default base