import { computed, toRefs, inject } from 'vue'

const base = function(props, context, dependencies)
{
  const {
    placeholder,
  } = toRefs(props)

  // =============== INJECT ===============

  const config$ = inject('config$')

  // ============== COMPUTED ==============

  /**
   * The localized placeholder of the element.
   * 
   * @type {string}
   * 
   */
  const Placeholder = computed(() => {
    return placeholder.value
  })

  return {
    Placeholder,
  }
}

export default base