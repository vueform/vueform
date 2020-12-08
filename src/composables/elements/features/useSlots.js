import { computed,  toRefs, markRaw } from 'composition-api'
import computedOption from './../../../utils/computedOption'

const base = function(props, context, dependencies, options = {})
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const components = dependencies.components

  // =============== OPTIONS ==============

  const defaultSlots = computed(() => {
    return Object.assign({}, {
      label: markRaw(components.value.ElementLabel),
      info: markRaw(components.value.ElementInfo),
      description: markRaw(components.value.ElementDescription),
      error: markRaw(components.value.ElementError),
      message: markRaw(components.value.ElementMessage),
      before: markRaw(components.value.ElementText),
      between: markRaw(components.value.ElementText),
      after: markRaw(components.value.ElementText),
      checkbox: markRaw(components.value.CheckboxgroupSlotCheckbox),
      radio: markRaw(components.value.RadiogroupSlotRadio),
      option: markRaw(components.value.MultiselectSlotOption),
      noResults: markRaw(components.value.MultiselectSlotNoResults),
      noOptions: markRaw(components.value.MultiselectSlotNoOptions),
      singleLabel: markRaw(components.value.MultiselectSlotSingleLabel),
      multipleLabel: markRaw(components.value.MultiselectSlotMultipleLabel),
      tag: markRaw(components.value.MultiselectSlotTag),
      progress: markRaw(components.value.FileSlotProgress),
      preview: markRaw(components.value.FileSlotPreview),
      beforeList: null,
      afterList: null,
    }, options.defaultSlots || {})
  })

  let elementSlots = options.slots || [
    'label', 'info', 'description', 'error',
    'message', 'before', 'between', 'after'
  ]

  let baseSlots = computed(() => {
    let slots = elementSlots

    if (_.isArray(elementSlots)) {
      let slotList = {}

      _.each(elementSlots, (name) => {
        slotList[name] = defaultSlots.value[name]
      })

      slots = slotList
    }

    return slots
  })


  // ============== COMPUTED ==============

  /**
   * Text or HTML to be placed before the field. If `before` slot is provided this will not appear.
   * 
   * @type {string}
   */
  const before = computedOption('before', schema, null)

  /**
   * Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear.
   * 
   * @type {string}
   */
  const between = computedOption('between', schema, null)

  /**
   * Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear.
   * 
   * @type {string}
   */
  const after = computedOption('after', schema, null)

  /**
   * Returns slots for the element. Setting the value as an object will merge the current slots with the provided values.
   * 
   * @type {object}
   */
  const slots = computed({
    get() {
      return Object.assign({}, baseSlots.value, schema.value.slots || {})
    },
    set(val) {
      form$.value.$set(schema.value, 'slots', val)
    }
  })

  return {
    before,
    between,
    after,
    slots,
  }
}

export default base