import { createForm, findAllComponents, testPropDefault, destroy, isVisible } from 'test-helpers'

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

    expect(form.vm.$vueform.config.labels).toBe(false)
    expect(el.hasLabel).toBe(true)
    
    // destroy(form) // teardown
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
        forceLabels: true,
      }
    })

    let el = form.vm.el$('el')

    expect(form.vm.$vueform.config.forceLabels).toBe(true)
    expect(el.hasLabel).toBe(true)
    
    // destroy(form) // teardown
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

    expect(form.vm.$vueform.config.labels).toBe(false)
    expect(el.hasLabel).toBe(false)

    // destroy() // teardown
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
    }, {
      attach: true,
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let ElementLabel = findAllComponents(elWrapper, { name: 'ElementLabel' })

    isVisible(ElementLabel.at(0), true)
    
    destroy(form) // teardown
  })

  it('should should not render `ElementLabel` if hasLabel is "false"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    }, {
      config: {
        forceLabels: false,
      },
      attach: true,
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let ElementLabel = findAllComponents(elWrapper, { name: 'ElementLabel' })

    isVisible(ElementLabel.at(0), false)

    destroy(form) // teardown
  })
}