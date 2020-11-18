import { computed } from 'composition-api'

export default function (props, context, dependencies)
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