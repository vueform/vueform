import computedOption from './../../../utils/computedOption'
import { computed } from 'composition-api'

export default function usePlaceholder(props, context, dependencies)
{
  const schema = props.schema
  
  // ============== COMPUTED ==============

  /**
  * The placeholder of the element.
  * 
  * @type {string}
  */
  const placeholder = computed(computedOption('placeholder', schema, null))

  return {
    placeholder,
  }
}