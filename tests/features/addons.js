import { createForm, findAllComponents, testComputedOption } from 'test-helpers'

export const addons = function(elementType, elementName, options) {
  // Computed Options
  testComputedOption(it, elementType, 'addons', {}, {
    before: '$',
    after: '%'
  })
}

export const hasAddon = function(elementType, elementName, options) {
  // Computed Props
  it('should `hasAddon` "false" if `addons` is not defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.hasAddon).toBe(false)
  })

  it('should `hasAddon` "true" if `addons.before` is defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          addons: {
            before: '$'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.hasAddon).toBe(true)
  })

  it('should `hasAddon` "true" if `addons.after` is defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          addons: {
            after: '%'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.hasAddon).toBe(true)
  })
}

export const rendering = function(elementType, elementName, options) {
  // Template
  it('should not have InputAddon if not defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let InputAddon = findAllComponents(elWrapper, { name: 'InputAddon' })

    expect(InputAddon.length).toBe(0)
  })

  it('should render InputAddon "before" if it is defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          addons: {
            before: '$'
          }
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let InputAddon = findAllComponents(elWrapper, { name: 'InputAddon' }).at(0)

    expect(InputAddon.vm.type).toBe('before')
  })

  it('should render InputAddon "after" if it is defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          addons: {
            after: '%'
          }
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let InputAddon = findAllComponents(elWrapper, { name: 'InputAddon' }).at(0)

    expect(InputAddon.vm.type).toBe('after')
  })
}