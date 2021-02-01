import { computed, ref } from 'composition-api'
import isVueComponent from './../utils/isVueComponent'

const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const descriptor = dependencies.descriptor
  const component$ = dependencies.component$ || ref(null)

  // ============== COMPUTED ==============
  
  /**
  * 
  * 
  * @private
  */
  const baseLabel = computed(() => {
    return descriptor.value.label
  })

  /**
  * 
  * 
  * @private
  */
  const isLabelFunction = computed(() => {
    return typeof baseLabel.value === 'function' && (!baseLabel.value.prototype || !baseLabel.value.prototype.constructor || (baseLabel.value.prototype.constructor && baseLabel.value.prototype.constructor.name !== 'VueComponent'))
  })

  /**
  * 
  * 
  * @private
  */
  const isLabelComponent = computed(() => {
    return isVueComponent(baseLabel.value)
  })
  
  /**
  * 
  * 
  * @private
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