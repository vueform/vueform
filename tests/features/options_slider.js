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
      min: el.min,
      max: el.max,
      step: el.step,
      tooltips: el.tooltips,
      merge: el.merge,
      format: el.format,
      orientation: el.orientation,
      direction: el.direction,
      disabled: el.isDisabled,
      showTooltip: el.showTooltip,
      tooltipPosition: el.tooltipPosition,
      lazy: el.lazy,
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
      min: el.min,
      max: el.max,
      step: el.step,
      tooltips: el.tooltips,
      merge: el.merge,
      format: el.format,
      orientation: el.orientation,
      direction: el.direction,
      disabled: el.isDisabled,
      showTooltip: el.showTooltip,
      tooltipPosition: el.tooltipPosition,
      lazy: el.lazy,
      custom: 'option'
    })
  })
  
  it('should bind `fieldOptions` to slider', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let Slider = findAllComponents(elWrapper, { name: 'Slider' }).at(0)
    
    _.each(el.fieldOptions, (value, key) => {
      expect(Slider.props(key)).toStrictEqual(value)
    })

    // destroy() // teardown
  })
}