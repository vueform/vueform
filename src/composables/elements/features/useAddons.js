import { computed, toRefs } from 'composition-api'
import computedOption from './../../../utils/computedOption'

export default function useAddons(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============== COMPUTED ==============

  /**
  * An object containing `before` and `after` properties, representing the contents of the input's before and after addons.
  * 
  * @type {object}
  * @default {}
  */
  const addons = computedOption('addons', schema, {})
  
  /**
   * Helper property used to determine internally if the element has any addons.
   * 
   * @type {boolean}
   */
  const hasAddon = computed(() => schema.value.addons !== undefined)

  return {
    addons,
    hasAddon,
  }
}