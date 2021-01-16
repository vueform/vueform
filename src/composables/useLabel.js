import { computed, ref } from 'composition-api'
import isVueComponent from './../utils/isVueComponent'

export default function useLabel(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const descriptor = dependencies.descriptor
  const component$ = dependencies.component$ || ref(null)

  // ============== COMPUTED ==============
  
  const baseLabel = computed(() => {
    return descriptor.value.label
  })

  const isLabelFunction = computed(() => {
    return typeof baseLabel.value === 'function' && (!baseLabel.value.prototype || !baseLabel.value.prototype.constructor || (baseLabel.value.prototype.constructor && baseLabel.value.prototype.constructor.name !== 'VueComponent'))
  })

  const isLabelComponent = computed(() => {
    return isVueComponent(baseLabel.value)
  })
  
  const label = computed(() => {
    return isLabelFunction.value ? baseLabel.value(component$.value) : baseLabel.value || null
  })

  return {
    label,
    isLabelComponent,
  }
}