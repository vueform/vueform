import { computed,  toRefs, markRaw } from 'composition-api'

const base = function(props, context, dependencies, options = {})
{
  const {
    slots
  } = toRefs(props)

  // ============ DEPENDENCIES ============

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

  let defaultElementSlots = options.slots || [
    'label', 'info', 'description', 'error',
    'message', 'before', 'between', 'after'
  ]

  let baseSlots = computed(() => {
    let slots = defaultElementSlots

    if (_.isArray(defaultElementSlots)) {
      let slotList = {}

      _.each(defaultElementSlots, (name) => {
        slotList[name] = defaultSlots.value[name]
      })

      slots = slotList
    }

    return slots
  })


  // ============== COMPUTED ==============

  /**
   * Returns slots for the element. Setting the value as an object will merge the current slots with the provided values.
   * 
   * @type {object}
   * @option
   */
  const elementSlots = computed(() => {
    return Object.assign({}, baseSlots.value, slots.value || {})
  })

  return {
    elementSlots,
  }
}

export default base