import { computed, toRefs } from 'composition-api'
import computedOption from './../../../utils/computedOption'

const base = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // ============== COMPUTED ==============

  /**
   * Label of the element.
   * 
   * @type {string} 
   * @default ""
   */
  const label = computedOption('label', schema, '')

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
    label,
    hasLabel,
  }
}

export default base