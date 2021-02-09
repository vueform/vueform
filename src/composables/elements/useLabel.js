import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    label
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // ============== COMPUTED ==============

  /**
   * Helper property used to determine internally if a label should be
   * rendered for the element.
   * 
   * @type {boolean}
   */
  const hasLabel = computed(() => {
    return !!(form$.value.$laraform.labels || label.value)
  })

  return {
    hasLabel,
  }
}

export default base