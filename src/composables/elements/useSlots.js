import _ from 'lodash'
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

  const defaultFieldSlots = options.defaultFieldSlots || {
    addonBefore: 'ElementAddon',
    addonAfter: 'ElementAddon',
    checkbox: 'CheckboxgroupSlotCheckbox',
    radio: 'RadiogroupSlotRadio',
    option: 'MultiselectSlotOption',
    noresults: 'MultiselectSlotNoResults',
    nooptions: 'MultiselectSlotNoOptions',
    singlelabel: 'MultiselectSlotSingleLabel',
    multiplelabel: 'MultiselectSlotMultipleLabel',
    tag: 'MultiselectSlotTag',
    preview: 'FileSlotFilePreview',
    beforelist: null,
    afterlist: null,
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

  /**
   * Props for element slots.
   * 
   * @type {object}
   * @private
   */
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
   * Slots of the element.
   * 
   * @type {object}
   * @private
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
   * Slots related to the element's field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.
   * 
   * @type {{[name]:component}}
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

const file = function(props, context, dependencies, options = {})
{
  const {
    image,
    view,
  } = toRefs(props)

  let preview = 'FileSlotFilePreview'

  if (image.value && view.value !== 'file') {
    preview = view.value == 'gallery' ? 'FileSlotGalleryPreview' : 'FileSlotImagePreview'
  }

  const {
    elementSlots,
    fieldSlots,
    elementSlotProps,
  } = base(props, context, dependencies, Object.assign({}, options, {
    defaultFieldSlots: { preview }
  }))

  return {
    elementSlots,
    fieldSlots,
    elementSlotProps,
  }
}

export {
  file,
}

export default base