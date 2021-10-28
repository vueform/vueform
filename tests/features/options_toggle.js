import { createForm, testPropDefault, destroy } from 'test-helpers'

export const fieldOptions = function (elementType, elementName, options) {
  it('should have default `fieldOptions`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          labels: {
            on: 'On'
          },
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.fieldOptions).toStrictEqual({ 
      disabled: el.isDisabled,
      onLabel: el.labels.on,
      offLabel: '',
      trueValue: el.trueValue,
      falseValue: el.falseValue,
    })
  })
  
  it('should extend `fieldOptions` from schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          labels: {
            on: 'On'
          },
          extendOptions: {
            custom: 'option'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.fieldOptions).toStrictEqual({ 
      disabled: el.isDisabled,
      onLabel: el.labels.on,
      offLabel: '',
      trueValue: el.trueValue,
      falseValue: el.falseValue,
      custom: 'option',
    })
  })
  
  it('should bind `fieldOptions` to toggle button', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let Toggle = findAllComponents(elWrapper, { name: 'Toggle' }).at(0)
    
    _.each(el.fieldOptions, (value, key) => {
      expect(Toggle.props(key)).toStrictEqual(value)
    })

    // destroy() // teardown
  })
}