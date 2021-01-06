import { createForm, testComputedOption } from 'test-helpers'

export const min = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'min', 0, 10)
}

export const max = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'max', 100, 200)
}

export const step = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'step', 1, 2)
}

export const tooltips = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'tooltips', true, false)
}

export const merge = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'merge', -1, 5)
}

export const format = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'format', false, { decimals: 2 })
}

export const orientation = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'orientation', 'horizontal', 'vertical')
}

export const direction = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'direction', 'ltr', 'rtl')
}

export const height = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'height', '300px', '400px')
}

export const options = function (elementType, elementName, options) {
  it('should have default `options`', () => {
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

    expect(el.options).toStrictEqual({
      min: el.min,
      max: el.max,
      step: el.step,
      tooltips: el.tooltips,
      merge: el.merge,
      format: el.format,
      orientation: el.orientation,
      direction: el.direction,
      height: el.height,
      disabled: el.disabled,
    })
  })
  
  it('should extend `options` from schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          labels: {
            on: 'On'
          },
          options: {
            custom: 'option'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.options).toStrictEqual({
      min: el.min,
      max: el.max,
      step: el.step,
      tooltips: el.tooltips,
      merge: el.merge,
      format: el.format,
      orientation: el.orientation,
      direction: el.direction,
      height: el.height,
      disabled: el.disabled,
      custom: 'option'
    })
  })
  
  it('should set `options` to schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.options = {
      custom: 'option'
    }

    expect(el.schema.options).toStrictEqual({
      custom: 'option'
    })
  })
  
  it('should bind `options` to slider', () => {
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
    
    _.each(el.options, (value, key) => {
      expect(Slider.props(key)).toStrictEqual(value)
    })
  })
}