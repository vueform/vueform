import { createForm, findAllComponents, testPropDefault } from 'test-helpers'

export const hasLabel = function (elementType, elementName, options) { 
  it('should have `hasLabel` equal "true" if the element has label defined & config.labels disabled', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          label: 'Label'
        }
      }
    }, {
      config: {
        labels: false,
      }
    })

    let el = form.vm.el$('el')

    expect(form.vm.$laraform.labels).toBe(false)
    expect(el.hasLabel).toBe(true)
  })

  it('should have `hasLabel` equal "true" if the element has no label defined & config.labels enabled', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    }, {
      config: {
        labels: true,
      }
    })

    let el = form.vm.el$('el')

    expect(form.vm.$laraform.labels).toBe(true)
    expect(el.hasLabel).toBe(true)
  })

  it('should have `hasLabel` equal "false" if the element has no label defined & config.labels disabled', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    }, {
      config: {
        labels: false,
      }
    })

    let el = form.vm.el$('el')

    expect(form.vm.$laraform.labels).toBe(false)
    expect(el.hasLabel).toBe(false)
  })
}

export const rendering = function (elementType, elementName, options) {
  it('should should render `ElementLabel` if hasLabel is "true"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          label: 'Element Label',
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let ElementLabel = findAllComponents(elWrapper, { name: 'ElementLabel' })

    expect(ElementLabel.at(0).vm.label === el.label).toBe(true)
  })

  it('should should render `ElementLabel` if hasLabel is "false"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    }, {
      config: {
        labels: false,
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let ElementLabel = findAllComponents(elWrapper, { name: 'ElementLabel' })

    expect(ElementLabel.length === 0 || ElementLabel.at(0).vm.label !== el.label).toBe(true)
  })
}