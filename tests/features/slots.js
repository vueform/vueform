import { createForm, findAllComponents, testPropDefault, createElement, destroy } from 'test-helpers'
import { defineComponent, markRaw, nextTick, h } from 'composition-api'

const slotTemplates = {
  default: markRaw(defineComponent({
    name: 'CustomSlot',
    props: ['el$'],
    render(h) {
      return createElement(h, 'div', 'from schema slot')
    }
  }))
}

const scopedSlotTemplates = {
  default: (props) => {
    return createElement(h, 'div', 'from inline slot')
  }
}

const configs = {
  info: {
    default: {
      label: 'Label',
    }
  },
  checkbox: {
    default: {
      items: [1,2,3],
    }
  }
}

export const slots = function (elementType, elementName, options) {
  const defaultForm = createForm({
    schema: {
      el: {
        type: elementType,
      }
    }
  })

  const defaultSlots = findAllComponents(defaultForm, { name: elementName }).at(0).vm.elementSlots
  const fieldSlots = findAllComponents(defaultForm, { name: elementName }).at(0).vm.fieldSlots

  // Slots
  _.each(_.keys(defaultSlots), (slot) => {
    testSchemaSlot(it, elementName, elementType, slot)
  })

  _.each(_.keys(fieldSlots), (slot) => {
    testSchemaSlot(it, elementName, elementType, slot)
  })

  _.each(_.keys(defaultSlots), (slot) => {
    testInlineSlot(it, elementName, elementType, slot)
  })
  
  _.each(_.keys(fieldSlots), (slot) => {
    testInlineSlot(it, elementName, elementType, slot)
  })
}

const testSchemaSlot = function(it, elementName, elementType, slot) {
  it('should replace `'+slot+'` slot from schema', async () => {
    let form
    let elWrapper
    let CustomSlot

    form = createForm({
      schema: {
        el: _.merge({}, {
          type: elementType,
          slots: {
            [slot]: slotTemplates[slot]?.[elementType] || slotTemplates[slot]?.default || slotTemplates.default
          }
        }, configs[slot]?.[elementType] || configs[slot]?.default || {})
      }
    })

    elWrapper = findAllComponents(form, { name: elementName }).at(0)
    CustomSlot = findAllComponents(elWrapper, { name: 'CustomSlot' })

    expect(CustomSlot.length >= 1).toBe(true)
  })
}

const testInlineSlot = function(it, elementName, elementType, slot) {
  it('should replace `'+slot+'` slot inline', async () => {
    let form
    let elWrapper
    let CustomSlot

    form = createForm({
      schema: {
        el: {
          type: elementType
        }
      }
    }, {}, function(h) {
      return createElement(h, 'form', [
        createElement(h, elementName, {
          props: _.merge({}, {
            type: elementType,
            name: 'el',
          }, configs[slot]?.[elementType] || configs[slot]?.default || {}),
          scopedSlots: {
            [slot]: scopedSlotTemplates[slot]?.[elementType] || scopedSlotTemplates[slot]?.default || scopedSlotTemplates.default
          }
        })
      ])
    })

    await nextTick()

    elWrapper = findAllComponents(form, { name: elementName }).at(0)
    
    expect(elWrapper.html()).toContain('from inline slot')
  })
}