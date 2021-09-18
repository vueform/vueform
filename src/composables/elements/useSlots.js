import _ from 'lodash'
import { computed,  toRefs, markRaw } from 'composition-api'

const base = function(props, context, dependencies, options = {})
{
  const {
    slots,
  } = toRefs(props)

  // =============== OPTIONS ==============

  const defaultElementSlots = [
    'label', 'info', 'description',
    'before', 'between', 'after',
  ]

  const defaultFieldSlots = options.defaultFieldSlots || {
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

  // ============== COMPUTED ==============

  /**
   * Slots of the element.
   * 
   * @type {object}
   * @private
   */
  const elementSlots = computed(() => {
    return [...defaultElementSlots.filter(s => options.slots.indexOf(s) !== -1)]
  })

  /**
   * Slots related to the element's field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.
   * 
   * @type {object}
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