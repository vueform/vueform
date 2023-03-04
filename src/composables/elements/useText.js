import { computed, toRefs, inject } from 'vue'

const base = function(props, context, dependencies)
{
  const {
    text,
  } = toRefs(props)

  // =============== INJECT ===============

  const config$ = inject('config$')

  // ============== COMPUTED ==============

  /**
   * The localized text of the element.
   * 
   * @type {string}
   * 
   */
  const Text = computed(() => {
    return text.value
  })

  return {
    Text,
  }
}

export default base