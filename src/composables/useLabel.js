import { computed, ref } from 'composition-api'
import isVueComponent from './../utils/isVueComponent'

const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const labelDefinition = dependencies.labelDefinition
  const component$ = dependencies.component$ || ref(null)

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
  * The label of the component. If the label is provided is a `function` this will always have the resolved value.
  * 
  * @type {string|component}
  */
  const label = computed(() => {
    return isLabelFunction.value ? baseLabel.value(component$.value) : baseLabel.value || null
  })

  return {
    label,
    isLabelComponent,
  }
}

export default base