import { computed, ref, inject } from 'vue'
import isVueComponent from './../utils/isVueComponent'
import localize from './../utils/localize'

const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const labelDefinition = dependencies.labelDefinition
  const component$ = dependencies.component$ || ref(null)

  // =============== INJECT ===============

  const config$ = inject('config$')

  // ============== COMPUTED ==============
  
  /**
  * The label definition of the component.
  * 
  * @type {string|function|component}
  * @private
  */
  const baseLabel = computed(() => {
    return labelDefinition.value
  })

  /**
  * Whether the label is provided as a function.
  * 
  * @type {boolean}
  * @private
  */
  const isLabelFunction = computed(() => {
    return typeof baseLabel.value === 'function' && (!baseLabel.value.prototype || !baseLabel.value.prototype.constructor || (baseLabel.value.prototype.constructor && baseLabel.value.prototype.constructor.name !== 'VueComponent'))
  })

  /**
  * Whether label is provided as a Vue component.
  * 
  * @type {boolean}
  * @private
  */
  const isLabelComponent = computed(() => {
    return isVueComponent(baseLabel.value)
  })
  
  /**
  * The label of the component. If the label is provided as a `function` this contains the resolved value.
  * 
  * @type {string|component}
  */
  const label = computed(() => {
    return localize(isLabelFunction.value ? baseLabel.value(component$.value) : baseLabel.value || null, config$.value)
  })

  return {
    label,
    isLabelComponent,
  }
}

export default base