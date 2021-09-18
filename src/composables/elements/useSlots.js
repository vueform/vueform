import _ from 'lodash'
import { computed,  toRefs, markRaw } from 'composition-api'

const base = function(props, context, dependencies, options = {})
{
  const {
    slots,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const el$ = dependencies.el$

  // =============== OPTIONS ==============

  const defaultElementSlots = [
    'label', 'info', 'description',
    'before', 'between', 'after',
  ]

  const defaultFieldSlots = [
    'checkbox', 'radio', 'option', 'single-label',
    'multiple-label', 'tag', 'no-results', 'no-options',
    'after-list', 'before-list'
  ]

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

    defaultFieldSlots.filter(s => options.slots.indexOf(s) !== -1).forEach(s => fieldSlots[s] = el$.value.slots[s] || el$.value.slots[_.camelCase(s)])

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

const checkbox = function(props, context, dependencies, options = {})
{
  const { slots } = toRefs(props)

  const {
    elementSlots,
    fieldSlots,
    elementSlotProps,
  } = base(props, context, dependencies, options)

  const defaultSlot = computed(() => {
    return slots.value.default || undefined
  })

  return {
    elementSlots,
    fieldSlots,
    elementSlotProps,
    defaultSlot
  }
}

export {
  file,
  checkbox,
}

export default base