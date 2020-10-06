import computedOption from './../../../utils/computedOption'
import { computed } from 'composition-api'

export default function useLabel(props, context, dependencies)
{
  const schema = props.schema

  // ============ DEPENDENCIES ============

  const { form$ } = dependencies.form$

  // ============== COMPUTED ==============

  /**
   * Label of the element.
   * 
   * @type {string} 
   * @default ''
   */
  const label = computed(computedOption('label', schema, ''))

  /**
   * Helper property used to determine internally if a label should be
   * rendered for the element.
   * 
   * @type {object}
   * @ignore
   */
  const hasLabel = computed(() => {
    return !!(form$.$laraform.config.labels || label.value)
  })

  return {
    label,
    hasLabel,
  }
}