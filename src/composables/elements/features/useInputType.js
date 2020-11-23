import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const { schema } = toRefs(props)
  
  // ============== COMPUTED ==============

  /**
   * The HTML type of input field (like type="text").
   * 
   * @type {string}
   * @default 'text'
   */
  const inputType = computedOption('inputType', schema, 'text')

  return {
    inputType,
  }
}

const password = function (props, context, dependencies)
{
  // ============== COMPUTED ==============

  /**
   * The HTML type of input field (like type="text").
   * 
   * @type {string}
   * @default 'text'
   */
  const inputType = computed(() => {
    return 'password'
  })

  return {
    inputType,
  }
}

export {
  password,
}

export default base