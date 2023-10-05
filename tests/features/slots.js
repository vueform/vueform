import { createForm, findAllComponents, testPropDefault, createElement, destroy } from 'test-helpers'
import { defineComponent, markRaw, nextTick, h } from 'vue'

const slotTemplatesArrayEl$ = {
  default: markRaw(defineComponent({
    name: 'CustomSlot',
    props: ['el$'],
    render(h) {
      return createElement(h, 'div', 'from schema slot')
    }
  })),
}

const slotTemplatesArrayNoEl$ = {
  default: markRaw(defineComponent({
    name: 'CustomSlot',
    props: ['otherProp'],
    render(h) {
      return createElement(h, 'div', 'from schema slot')
    }
  })),
}

const slotTemplatesObjectEl$ = {
  default: markRaw(defineComponent({
    name: 'CustomSlot',
    props: {
      el$: {
        type: Object,
        required: true,
      },
      otherProp: {
        type: Object,
        required: true,
      }
    },
    render(h) {
      return createElement(h, 'div', 'from schema slot')
    }
  })),
}

const slotTemplatesObjectNoEl$ = {
  default: markRaw(defineComponent({
    name: 'CustomSlot',
    props: {
      otherProp: {
        type: Object,
        required: true,
      }
    },
    render(h) {
      return createElement(h, 'div', 'from schema slot')
    }
  })),
}

const slotTemplatesNoProp = {
  default: markRaw(defineComponent({
    name: 'CustomSlot',
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

  const defaultSlots = { ...findAllComponents(defaultForm, { name: elementName }).at(0).vm.elementSlots }
  const fieldSlots = { ...findAllComponents(defaultForm, { name: elementName }).at(0).vm.fieldSlots }

  destroy(defaultForm)

  // Slots
  // _.each(_.keys(defaultSlots), (slot) => {
  //   testSchemaSlotArrayEl$(it, elementName, elementType, slot)
  // })
  //
  // _.each(_.keys(fieldSlots), (slot) => {
  //   testSchemaSlotArrayEl$(it, elementName, elementType, slot)
  // })
  //
  _.each(_.keys(defaultSlots), (slot) => {
    testSchemaSlotArrayEl$(it, elementName, elementType, slot)
  })

  _.each(_.keys(fieldSlots), (slot) => {
    testSchemaSlotArrayEl$(it, elementName, elementType, slot)
  })
  
  
  _.each(_.keys(defaultSlots), (slot) => {
    testSchemaSlotArrayNoEl$(it, elementName, elementType, slot, 'elementSlots')
  })

  _.each(_.keys(fieldSlots), (slot) => {
    testSchemaSlotArrayNoEl$(it, elementName, elementType, slot, 'fieldSlots')
  })

  
  _.each(_.keys(defaultSlots), (slot) => {
    testSchemaSlotObjectEl$(it, elementName, elementType, slot)
  })

  _.each(_.keys(fieldSlots), (slot) => {
    testSchemaSlotObjectEl$(it, elementName, elementType, slot)
  })

  
  _.each(_.keys(defaultSlots), (slot) => {
    testSchemaSlotObjectNoEl$(it, elementName, elementType, slot)
  })

  _.each(_.keys(fieldSlots), (slot) => {
    testSchemaSlotObjectNoEl$(it, elementName, elementType, slot)
  })

  
  _.each(_.keys(defaultSlots), (slot) => {
    testSchemaSlotNoProp(it, elementName, elementType, slot)
  })

  _.each(_.keys(fieldSlots), (slot) => {
    testSchemaSlotNoProp(it, elementName, elementType, slot)
  })

  

  _.each(_.keys(defaultSlots), (slot) => {
    testInlineSlot(it, elementName, elementType, slot)
  })

  _.each(_.keys(fieldSlots), (slot) => {
    testInlineSlot(it, elementName, elementType, slot)
  })
}

const testSchemaSlotArrayEl$ = function(it, elementName, elementType, slot) {
  
  it('should replace `'+slot+'` slot from schema', async () => {

    const config = _.merge({}, {
      type: elementType,
      slots: {
        [slot]: slotTemplatesArrayEl$[slot]?.[elementType] || slotTemplatesArrayEl$[slot]?.default || slotTemplatesArrayEl$.default
      }
    }, configs[slot]?.[elementType] || configs[slot]?.default || {})

    const form = createForm({
      schema: {
        el: config
      }
    }, {
      attach: true
    })
    
    const el = form.vm.el$('el')
    
    const elWrapper = findAllComponents(form, { name: elementName }).at(0)

    await (setups[slot] || setups.default)(elWrapper)
    
    expect(el.slots[slot].props).toStrictEqual(['el$'])
    expect(elWrapper.html()).toContain('from schema slot')

    destroy(form)
  })
}

const testSchemaSlotArrayNoEl$ = function(it, elementName, elementType, slot, slotPosition) {
  
  it(`should add el$ to ${slot} array`, async () => {

    const config = _.merge({}, {
      type: elementType,
      slots: {
        [slot]: slotTemplatesArrayNoEl$[slot]?.[elementType] || slotTemplatesArrayNoEl$[slot]?.default || slotTemplatesArrayNoEl$.default
      }
    }, configs[slot]?.[elementType] || configs[slot]?.default || {})

    const form = createForm({
      schema: {
        el: config
      }
    }, {
      attach: true
    })

    const el = form.vm.el$('el')

    const elWrapper = findAllComponents(form, { name: elementName }).at(0)
    
    await (setups[slot] || setups.default)(elWrapper)
    
    expect(el[slotPosition][slot].props).toStrictEqual(['otherProp', 'el$'])
    
    destroy(form)
  })
}

const testSchemaSlotObjectEl$ = function(it, elementName, elementType, slot) {
  
  it(`should add custom prop to ${slot} object`, async () => {
    
    const config = _.merge({}, {
      type: elementType,
      slots: {
        [slot]: slotTemplatesObjectNoEl$[slot]?.[elementType] || slotTemplatesObjectNoEl$[slot]?.default || slotTemplatesObjectNoEl$.default
      }
    }, configs[slot]?.[elementType] || configs[slot]?.default || {})

    const form = createForm({
      schema: {
        el: config
      }
    }, {
      attach: true
    })
    
    const el = form.vm.el$('el')
    
    const elWrapper = findAllComponents(form, { name: elementName }).at(0)

    await (setups[slot] || setups.default)(elWrapper)
    
    expect(el.slots[slot].props.el$).toStrictEqual({
      type: Object,
      required: true,
    })
    expect(el.slots[slot].props.otherProp).toStrictEqual({
      type: Object,
      required: true,
    })
    
    destroy(form)
  })
}

const testSchemaSlotObjectNoEl$ = function(it, elementName, elementType, slot) {
  
  it(`should add el$ to ${slot} object`, async () => {
    
    const config = _.merge({}, {
      type: elementType,
      slots: {
        [slot]: slotTemplatesObjectEl$[slot]?.[elementType] || slotTemplatesObjectEl$[slot]?.default || slotTemplatesObjectEl$.default
      }
    }, configs[slot]?.[elementType] || configs[slot]?.default || {})

    const form = createForm({
      schema: {
        el: config
      }
    }, {
      attach: true
    })
    
    const el = form.vm.el$('el')
    
    const elWrapper = findAllComponents(form, { name: elementName }).at(0)

    await (setups[slot] || setups.default)(elWrapper)
    
    expect(el.slots[slot].props.el$).toStrictEqual({
      type: Object,
      required: true,
    })
    expect(el.slots[slot].props.otherProp).toStrictEqual({
      type: Object,
      required: true,
    })
    
    destroy(form)
  })
}

const testSchemaSlotNoProp = function(it, elementName, elementType, slot) {
  
  it(`should add props to ${slot}`, async () => {
    
    const config = _.merge({}, {
      type: elementType,
      slots: {
        [slot]: slotTemplatesNoProp[slot]?.[elementType] || slotTemplatesNoProp[slot]?.default || slotTemplatesNoProp.default
      }
    }, configs[slot]?.[elementType] || configs[slot]?.default || {})

    const form = createForm({
      schema: {
        el: config
      }
    }, {
      attach: true
    })

    const el = form.vm.el$('el')
    const elWrapper = findAllComponents(form, { name: elementName }).at(0)

    await (setups[slot] || setups.default)(elWrapper)
    
    expect(el.slots[slot].props).toStrictEqual(['el$'])

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