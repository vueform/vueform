import { toRefs, computed } from 'vue'

const base = function(props, context, dependencies)
{
  const {
    floating,
    placeholder,
  } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const form$ = dependencies.form$
  
  // ============== COMPUTED ==============
  
  /**
   * Whether the element floating label.
   *
   * @type {boolean}
   */
  const hasFloating = computed(() => {
    return !!(!!floating.value || (placeholder.value && form$.value.options.floatPlaceholders)) && floating.value !== false
  })
  
  return {
    hasFloating,
  }
}

export default base