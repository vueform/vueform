import { nextTick } from 'vue'
import { createForm, findAllComponents, destroy } from 'test-helpers'
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

    // destroy() // teardown
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
    
    // destroy(form) // teardown
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
    let el2 = form.vm.el$('el2')

    expect(el.available).toBe(false)
    expect(el.hidden).toBe(false)
    expect(el.active).toBe(true)

    expect(el.visible).toBe(false)

    el2.update('value')

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

    // destroy() // teardown
  })
}

export const Size = function(elementType, elementName, options) {
  it('should be equal to form size', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      },
      size: 'sm'
    })

    let el = form.vm.el$('el')

    expect(el.Size).toBe('sm')
  })

  it('should be equal to parent size', () => {
    let form = createForm({
      schema: {
        parent: {
          type: 'object',
          size: 'sm',
          schema: {
            el: {
              type: elementType,
            }
          }
        }
      },
      size: 'md'
    })

    let el = form.vm.el$('parent.el')

    expect(el.Size).toBe('sm')
  })
  
  it('should be equal to preset size', () => {
    let form = createForm({
      schema: {
        parent: {
          type: 'object',
          size: 'lg',
          schema: {
            el: {
              type: elementType,
              presets: ['preset']
            }
          }
        }
      },
      size: 'md'
    }, {
      config: {
        presets: {
          preset: {
            size: 'sm'
          }
        }
      }
    })

    let el = form.vm.el$('parent.el')

    expect(el.Size).toBe('sm')
  })

  it('should be equal to props size', () => {
    let form = createForm({
      schema: {
        parent: {
          type: 'object',
          size: 'lg',
          schema: {
            el: {
              type: elementType,
              presets: ['preset'],
              size: 'xl'
            }
          }
        }
      },
      size: 'md'
    }, {
      config: {
        presets: {
          preset: {
            size: 'sm'
          }
        }
      }
    })

    let el = form.vm.el$('parent.el')

    expect(el.Size).toBe('xl')
  })
}

export const View = function(elementType, elementName, options) {
  it('should be equal to value from views', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      },
      views: {
        [elementName]: 'dark'
      }
    })

    let el = form.vm.el$('el')

    expect(el.View).toBe('dark')
  })

  it('should be equal to props value', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          view: 'light'
        }
      },
      views: {
        [elementName]: 'dark'
      }
    })

    let el = form.vm.el$('el')

    expect(el.View).toBe('light')
  })
}

export const Views = function(elementType, elementName, options) {
  it('should be equal to form value', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      },
      views: {
        [elementName]: 'dark'
      }
    })

    let el = form.vm.el$('el')

    expect(el.Views[elementName]).toBe('dark')
  })
  
  it('should be merged with preset value', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          presets: ['preset'],
        }
      },
      views: {
        [elementName]: 'dark'
      }
    }, {
      config: {
        presets: {
          preset: {
            views: {
              [elementName]: 'light'
            }
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.Views[elementName]).toBe('light')
  })
  
  it('should be merged with props value', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          presets: ['preset'],
          views: {
            [elementName]: 'not-light'
          }
        }
      },
      views: {
        [elementName]: 'dark'
      }
    }, {
      config: {
        presets: {
          preset: {
            views: {
              [elementName]: 'light'
            }
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.Views[elementName]).toBe('not-light')
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

    // destroy() // teardown
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

    // destroy() // teardown
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

    // destroy() // teardown
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

    // destroy() // teardown
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
    }, {
      attach: true,
    })

    let el = form.vm.el$('el')

    expect(el.visible).toBe(true)
    expect(el.$el).toBeVisible()
    
    destroy(form) // teardown
  })

  it('should not show element if `visible` is "false"', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    }, {
      attach: true
    })

    let el = findAllComponents(form, { name: elementName }).at(0)

    el.vm.hide()

    await nextTick()

    expect(el.vm.visible).toBe(false)
    
    expect(el.vm.$el).not.toBeVisible()

    destroy(form) // teardown
  })
}