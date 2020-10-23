import { computed,  toRefs } from 'composition-api'
import computedOption from './../../../utils/computedOption'

export default function useSlots(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============== COMPUTED ==============

  /**
   * Returns slots for the element. Setting the value as an object will merge the current slots with the provided values.
   * 
   * @type {object}
   */
  const slots = computed({
    get() {
      return Object.assign({}, {
        info: null,
        label: null,
        before: null,
        between: null,
        after: null,
        description: null,
        error: null,
        message: null,
      }, schema.slots || {})
    },
    set(val) {
      schema.value.slots = Object.assign({}, schema.value.slots || {}, val)
    }
  })

  /**
   * Text or HTML to be placed before the field. If `before` slot is provided this will not appear.
   * 
   * @type {string}
   */
  const before = computed(computedOption('before', schema, null))

  /**
   * Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear.
   * 
   * @type {string}
   */
  const between = computed(computedOption('between', schema, null))

  /**
   * Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear.
   * 
   * @type {string}
   */
  const after = computed(computedOption('after', schema, null))

  return {
    slots,
    before,
    between,
    after,
  }
}