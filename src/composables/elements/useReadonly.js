import each from 'lodash/each'
import isArray from 'lodash/isArray'
import clone from 'lodash/clone'
import map from 'lodash/map'
import { computed, ref, toRefs } from 'vue'

const base = function(props, context, dependencies)
{
  const {
    readonly,
  } = toRefs(props)

  const { el$, form$, path } = dependencies
  
  // ============== COMPUTED ==============
  
  /**
   * Whether the element is readonly.
   *
   * @type {boolean}
   */
  const isReadonly = computed(() => {
    if (typeof readonly.value === 'function') {
      return readonly.value(el$.value, form$.value)
    }

    if (Array.isArray(readonly.value)) {
      return readonly.value.every((condition) => {
        return form$.value.$vueform.services.condition.check(condition, path.value, form$.value, el$.value)
      })
    }

    if (typeof readonly.value === 'object' && readonly.value && readonly.value.value !== undefined) {
      return readonly.value.value
    }

    return readonly.value
  })
  
  return {
    isReadonly,
  }
}

export default base