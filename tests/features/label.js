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

  it('should have `hasLabel` equal "true" if the element has no label defined & config.forceLabels enabled', () => {
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

export const Label = function (elementType, elementName, options) {
  it('should return `Label` null when label prop is not defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.Label).toBe(null)
    
    // destroy(form) // teardown
  })
  
  it('should return `Label` when label prop is function', () => {
    let form = createForm({
      schema: {
        el: {
          label: () => 'someLabel',
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.Label).toBe('someLabel')
    
    // destroy(form) // teardown
  })
  
  it('should return `Label` when Label prop is a VueComponent', () => {
    let form = createForm({
      schema: {
        el: {
          label: function VueComponent() {
            return 'componentLabel'
          },
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect((el.Label)()).toBe('componentLabel')
    
    // destroy(form) // teardown
  })
  
  it('should return label as `Label` when label prop is string', () => {
    let form = createForm({
      schema: {
        el: {
          label: 'someLabel',
          type: elementType,
          fieldName: {
            en: 'field-name',
            de: 'field-name-de'
          }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.Label).toBe('someLabel')
    
    // destroy(form) // teardown
  })
  
  it('should return localized `Label` when multiple languages used', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          label: {
            en: 'label',
            de: 'label-de'
          }
        }
      },
      locale: 'de'
    })
    
    let el = form.vm.el$('el')
    
    expect(el.Label).toBe('label-de')
    
    // destroy(form) // teardown
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