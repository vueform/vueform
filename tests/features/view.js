import { nextTick } from 'vue'
import { createForm, findAllComponents } from 'test-helpers'
import { toBeVisible } from '@testing-library/jest-dom/matchers'

expect.extend({toBeVisible})

export const hidden = function (elementType, elementName, options) {
  it('should have `hidden` equal to "false" by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.hidden).toBe(false)
  })
}

export const active = function (elementType, elementName, options) {
  it('should have `active` equal to "true" by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.active).toBe(true)
  })
}
  
export const visible = function (elementType, elementName, options) {
  it('should have "true" for `visible` if available, not hidden and active', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          conditions: [['el2', 'value']]
        },
        el2: {
          type: 'text',
          default: 'value'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.available).toBe(true)
    expect(el.hidden).toBe(false)
    expect(el.active).toBe(true)
    expect(el.visible).toBe(true)
  })

  it('should have "false" for `visible` if not available, hidden or not active', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          conditions: [['el2', 'value']]
        },
        el2: {
          type: 'text'
        }
      }
    })

    let el = form.vm.el$('el')
    let el2 = findAllComponents(form, { name: 'TextElement' })
    
    el2 = elementName === 'TextElement' ? el2.at(1) : el2.at(0)

    expect(el.available).toBe(false)
    expect(el.hidden).toBe(false)
    expect(el.active).toBe(true)

    expect(el.visible).toBe(false)

    el2.vm.update('value')

    expect(el.available).toBe(true)
    expect(el.hidden).toBe(false)
    expect(el.active).toBe(true)

    expect(el.visible).toBe(true)
    
    el.hidden = true

    expect(el.available).toBe(true)
    expect(el.hidden).toBe(true)
    expect(el.active).toBe(true)

    expect(el.visible).toBe(false)
    
    el.hidden = false
    el.active = false

    expect(el.available).toBe(true)
    expect(el.hidden).toBe(false)
    expect(el.active).toBe(false)

    expect(el.visible).toBe(false)
  })
}

export const hide = function (elementType, elementName, options) {
  it('should set hidden to "true" on `hide`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.hidden).toBe(false)

    el.hide()

    expect(el.hidden).toBe(true)
  })
}

export const show = function (elementType, elementName, options) {
  it('should set hidden to "false" on `show`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.hidden = true

    expect(el.hidden).toBe(true)

    el.show()

    expect(el.hidden).toBe(false)
  })
}

export const activate = function (elementType, elementName, options) {
  it('should set active to "true" on `activate`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.active = false

    expect(el.active).toBe(false)

    el.activate()

    expect(el.active).toBe(true)
  })
}

export const deactivate = function (elementType, elementName, options) {
  it('should set active to "false" on `deactivate`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.active).toBe(true)

    el.deactivate()

    expect(el.active).toBe(false)
  })
}

export const rendering = function (elementType, elementName, options) {
  it('should show element if `visible` is "true"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.visible).toBe(true)
    expect(el.$el).toBeVisible()
  })

  it('should not show element if `visible` is "true"', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.hide()

    await nextTick()

    expect(el.visible).toBe(false)
    expect(el.$el).not.toBeVisible()
  })
}