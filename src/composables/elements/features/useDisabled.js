import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'

export default function useDisabled(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============== COMPUTED ==============

  /**
   * Whether the field should be *disabled* for user input (API updates are possible).
   * 
   * @type {boolean} 
   * @default false
   */
  const disabled = computed(computedOption('disabled', schema, false))


  // =============== METHODS ==============

  /**
   * Disabled the field.
   *
   * @public
   * @returns {void}
   */
  const disable = () => {
    disabled.value = true
  }

  /**
   * Enables the field.
   *
   * @public
   * @returns {void}
   */
  const enable = () => {
    disabled.value = false
  }

  return {
    disabled,
    disable,
    enable,
  }
}