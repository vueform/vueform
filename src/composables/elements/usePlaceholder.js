import { computed, toRefs, inject } from 'vue'
import localize from './../../utils/localize'

const base = function(props, context, dependencies)
{
  const {
    placeholder,
  } = toRefs(props)
  
  // =============== INJECT ===============
  
  const config$ = inject('config$')
  const form$ = inject('form$')
  
  // ============== COMPUTED ==============
  
  /**
   * The localized placeholder of the element.
   *
   * @type {string}
   *
   */
  const Placeholder = computed(() => {
    return localize(placeholder.value, config$.value, form$.value)
  })
  
  return {
    Placeholder,
  }
}

export default base