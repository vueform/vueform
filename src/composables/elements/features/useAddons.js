import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'

export default function useAddons(props, context, dependencies)
{
  const schema = props.schema

  // ============== COMPUTED ==============

  /**
  * An object containing `before` and `after` properties, representing the contents of the input's before and after addons.
  * 
  * @type {object}
  * @default {}
  */
  const addons = computed(computedOption('addons', schema, {}))
  
  /**
   * Helper property used to determine internally if the element has any addons.
   * 
   * @type {boolean}
   */
  const hasAddon = computed(() => schema.addons !== undefined)

  return {
    addons,
    hasAddon,
  }
}