import { computed,  toRefs, markRaw } from 'composition-api'

const base = function(props, context, dependencies, options = {})
{
  const {
    slots
  } = toRefs(props)

  // =============== OPTIONS ==============

  const defaultElementSlots = {
    label: 'ElementLabel',
    info: 'ElementInfo',
    description: 'ElementDescription',
    error: 'ElementError',
    message: 'ElementMessage',
    before: 'ElementText',
    between: 'ElementText',
    after: 'ElementText',
  }

  const defaultFieldSlots = {
    addonBefore: 'InputAddon',
    addonAfter: 'InputAddon',
    checkbox: 'CheckboxgroupSlotCheckbox',
    radio: 'RadiogroupSlotRadio',
    option: 'MultiselectSlotOption',
    noResults: 'MultiselectSlotNoResults',
    noOptions: 'MultiselectSlotNoOptions',
    singleLabel: 'MultiselectSlotSingleLabel',
    multipleLabel: 'MultiselectSlotMultipleLabel',
    tag: 'MultiselectSlotTag',
    progress: 'FileSlotProgress',
    preview: 'FileSlotPreview',
    beforeList: null,
    afterList: null,
  }

  if (options.defaultSlots) {
    _.each(options.defaultSlots, (component, slot) => {
      if (defaultElementSlots[slot]) {
        defaultElementSlots[slot] = component
      }
      else {
        defaultFieldSlots[slot] = component
      }
    })
  }

  const elementSlotProps = computed(() => {
    return {
      before: {
        type: 'before'
      },
      between: {
        type: 'between'
      },
      after: {
        type: 'after'
      },
    }
  })

  // ============== COMPUTED ==============

  /**
   * Returns slots for the element. Setting the value as an object will merge the current slots with the provided values.
   * 
   * @type {object}
   */
  const elementSlots = computed(() => {
    const elementSlots = {}

    _.each(options.slots, (slot) => {
      if (defaultElementSlots[slot]) {
        elementSlots[slot] = defaultElementSlots[slot]
      }
    })

    _.each(slots.value, (component, slot) => {
      if (elementSlots[slot]) {
        elementSlots[slot] = component
      }
    })

    return elementSlots
  })

  /**
   * 
   * 
   * 
   * @private
   */
  const fieldSlots = computed(() => {
    const fieldSlots = {}

    _.each(options.slots, (slot) => {
      if (defaultFieldSlots[slot]) {
        fieldSlots[slot] = defaultFieldSlots[slot]
      }
    })

    _.each(slots.value, (component, slot) => {
      if (fieldSlots[slot]) {
        fieldSlots[slot] = component
      }
    })

    return fieldSlots
  })

  return {
    elementSlots,
    fieldSlots,
    elementSlotProps,
  }
}

export default base