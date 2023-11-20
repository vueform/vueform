import camelCase from 'lodash/camelCase'
import { computed, toRefs } from 'vue'

const base = function(props, context, dependencies, /* istanbul ignore next */ options = {})
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
    'checkbox', 'radio', 'option', 'single-label', 'multiple-label', 'tag',
    'no-results', 'no-options', 'after-list', 'before-list', 'placeholder',
    'group-label', 'caret', 'clear', 'spinner', 'option', 'default',
    'addon-before', 'addon-after',
  ]
  
  // ============== COMPUTED ==============
  
  /**
   * Slots of the element.
   *
   * @type {object}
   * @private
   */
  const elementSlots = computed(() => {
    const elementSlots = {}
    
    defaultElementSlots.filter(s => options.slots.indexOf(s) !== -1).forEach((s) => {
      const slot = el$.value.slots[s] || el$.value.slots[camelCase(s)]
      
      if (typeof slot === 'object') {
        if (slot.props && (
          (Array.isArray(slot.props) && slot.props.indexOf('el$') === -1) ||
          (!Array.isArray(slot.props) && Object.keys(slot.props).indexOf('el$') === -1)
        ))
        {
          if (Array.isArray(slot.props)) {
            slot.props.push('el$')
          } else {
            slot.props.el$ = {
              type: Object,
              required: true,
            }
          }
        } else if (!slot.props) {
          slot.props = ['el$']
        }
      }
      
      elementSlots[s] = slot
    })
    
    return elementSlots
  })
  
  /**
   * Slots related to the element's field. E.g. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, e.g. `option` or `single-label` for `SelectElement`.
   *
   * @type {object}
   * @private
   */
  const fieldSlots = computed(() => {
    const fieldSlots = {}
    
    defaultFieldSlots.filter(s => options.slots.indexOf(s) !== -1).forEach((s) => {
      const slot = el$.value.slots[s] || el$.value.slots[camelCase(s)]
      
      // Add `el$` prop to `default` slot
      if (typeof slot === 'object') {
        if (slot.props && (
          (Array.isArray(slot.props) && slot.props.indexOf('el$') === -1) ||
          (!Array.isArray(slot.props) && Object.keys(slot.props).indexOf('el$') === -1)
        ))
        {
          if (Array.isArray(slot.props)) {
            slot.props.push('el$')
          } else {
            slot.props.el$ = {
              type: Object,
              required: true,
            }
          }
        } else if (!slot.props) {
          slot.props = ['el$']
        }
      }
      
      fieldSlots[s] = slot
    })
    
    return fieldSlots
  })
  
  return {
    elementSlots,
    fieldSlots,
  }
}

export default base