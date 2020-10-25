import { computed,  toRefs } from 'composition-api'
import computedOption from './../../../utils/computedOption'

export default function useSlots(props, context, dependencies, options = {})
{
  const { schema } = toRefs(props)

  // =============== OPTIONS ==============

  let defaultSlots = options.slots || [
    'label', 'info', 'before', 'between', 'after',
    'description', 'error', 'message',
  ]

  if (_.isArray(defaultSlots)) {
    let slotList = {}

    _.each(defaultSlots, (name) => {
      slotList[name] = null
    })

    defaultSlots = slotList
  }

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // ============== COMPUTED ==============

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

  /**
   * Returns slots for the element. Setting the value as an object will merge the current slots with the provided values.
   * 
   * @type {object}
   */
  const slots = computed({
    get() {
      return Object.assign({}, defaultSlots, schema.value.slots || {})
    },
    set(val) {
      form$.value.$set(schema.value, 'slots', Object.assign({}, defaultSlots, schema.value.slots || {}, val))
    }
  })

  return {
    before,
    between,
    after,
    slots,
  }
}