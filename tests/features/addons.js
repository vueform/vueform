import { createForm, findAllComponents, testPropDefault } from 'test-helpers'

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
  it('should not have ElementAddon if not defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let ElementAddon = findAllComponents(elWrapper, { name: 'ElementAddon' })

    expect(ElementAddon.length).toBe(0)
  })

  it('should render ElementAddon "before" if it is defined', () => {
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
    let ElementAddon = findAllComponents(elWrapper, { name: 'ElementAddon' }).at(0)

    expect(ElementAddon.vm.type).toBe('before')
  })

  it('should render ElementAddon "after" if it is defined', () => {
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
    let ElementAddon = findAllComponents(elWrapper, { name: 'ElementAddon' }).at(0)

    expect(ElementAddon.vm.type).toBe('after')
  })
}