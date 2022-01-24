import { createForm, findAllComponents, testPropDefault, createElement, destroy } from 'test-helpers'
import { defineComponent, markRaw, nextTick, h } from 'composition-api'

const slotTemplates = {
  default: markRaw(defineComponent({
    name: 'CustomSlot',
    props: ['el$'],
    render(h) {
      return createElement(h, 'div', 'from schema slot')
    }
  })),
}

const scopedSlotTemplates = {
  default: (props) => {
    return createElement(h, 'div', 'from inline slot')
  },
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
  },
  radio: {
    default: {
      items: [1,2,3],
    }
  },
  option: {
    default: {
      native: false,
      items: [1,2,3],
    }
  },
  tag: {
    default: {
      items: [1,2,3],
      default: [1],
    }
  },
  'no-results': {
    default: {
      native: false,
      items: [1,2,3],
      search: true,
    }
  },
  'no-options': {
    default: {
      native: false,
      items: [],
    }
  },
  'after-list': {
    default: {
      native: false,
      items: [1,2,3],
    }
  },
  'before-list': {
    default: {
      native: false,
      items: [1,2,3],
    }
  },
  placeholder: {
    default: {
      native: false,
      placeholder: 'Placeholder',
      items: [1,2,3],
    }
  },
  'group-label': {
    default: {
      native: false,
      groups: true,
      items: [
        {
          label: 'Group',
          items: [1,2,3]
        }
      ],
    }
  },
  clear: {
    default: {
      native: false,
      items: [1,2,3],
      default: [1]
    },
    select: {
      native: false,
      items: [1,2,3],
      default: 1
    },
  },
  caret: {
    default: {
      native: false,
      items: [1,2,3],
    }
  },
  spinner: {
    default: {
      native: false,
      items: [1,2,3],
      loading: true,
    }
  },
  'multiple-label': {
    default: {
      native: false,
      items: [1,2,3],
      default: [1],
    }
  },
  'single-label': {
    default: {
      native: false,
      items: [1,2,3],
      default: 1,
    }
  },
}

const setups = {
  default(){},
  'no-results': async (el) => {
    el.vm.input.search = 'aaa'
    await nextTick()
    await nextTick()
    await nextTick()
    el.vm.input.open()
    await nextTick()
    await nextTick()
    await nextTick()
  },
  'spinner': async (el) => {
    el.vm.input.isActive = true
    await nextTick()
    await nextTick()
    await nextTick()
  },
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

    const config = _.merge({}, {
      type: elementType,
      slots: {
        [slot]: slotTemplates[slot]?.[elementType] || slotTemplates[slot]?.default || slotTemplates.default
      }
    }, configs[slot]?.[elementType] || configs[slot]?.default || {})

    form = createForm({
      schema: {
        el: config
      }
    }, {
      attach: true
    })

    elWrapper = findAllComponents(form, { name: elementName }).at(0)
    CustomSlot = findAllComponents(elWrapper, { name: 'CustomSlot' })

    await (setups[slot] || setups.default)(elWrapper)

    expect(elWrapper.html()).toContain('from schema slot')

    destroy(form)
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

    elWrapper = findAllComponents(form, { name: elementName }).at(0)

    await (setups[slot] || setups.default)(elWrapper)
    
    expect(elWrapper.html()).toContain('from inline slot')
  })
}