import { computed, toRefs, inject } from 'vue'
import localize from './../../utils/localize'

const base = function(props, context, dependencies)
{
  const {
    text,
  } = toRefs(props)
  
  // =============== INJECT ===============
  
  const config$ = inject('config$')
  const form$ = inject('form$')
  
  // ============== COMPUTED ==============
  
  /**
   * The localized text of the element.
   *
   * @type {string}
   *
   */
  const Text = computed(() => {
    return localize(text.value, config$.value, form$.value) || ''
  })
  
  return {
    Text,
  }
}

export default base