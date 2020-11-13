import { computed, toRefs } from 'composition-api'
import computedOption from './../../../utils/computedOption'

export default function useDefault(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES =============

  const nullValue = dependencies.nullValue

  // ============== COMPUTED ===============

  /**
  * The default value of the element.
  * 
  * @type {boolean}
  */
  const default_ = computed(computedOption('default', schema, _.clone(nullValue.value)))

  return {
    // Computed
    default: default_,
  }
}