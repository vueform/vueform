import { createForm, testComputedOption } from 'test-helpers'

export const labels = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'labels', false, { checked: 'foo', unchecked: 'bar' })
}

export const speed = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'speed', 300, 500)
}

export const cssColors = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'cssColors', true, false)
}

export const dimensions = function (elementType, elementName, options) {
  it('should have default 50x22 default `dimensions`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.dimensions).toStrictEqual({ width: 50, height: 22 })
  })

  it('should overwrite `dimensions` width', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          dimensions: {
            width: 30
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.dimensions).toStrictEqual({ width: 30, height: 22 })
  })

  it('should overwrite `dimensions` height', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          dimensions: {
            height: 30
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.dimensions).toStrictEqual({ width: 50, height: 30 })
  })

  it('should overwrite `dimensions` width & height', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          dimensions: {
            width: 60,
            height: 30
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.dimensions).toStrictEqual({ width: 60, height: 30 })
  })

  it('should set `dimensions` to schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.dimensions = {
      width: 60,
      height: 30
    }

    expect(el.schema.dimensions).toStrictEqual({ width: 60, height: 30 })
  })
}

export const colors = function (elementType, elementName, options) {
  it('should have default #777777/#FFFFFF default `colors`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.colors).toStrictEqual({ background: '#777777', handle: '#FFFFFF' })
  })

  it('should set background `colors`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          colors: {
            background: '#333333'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.colors).toStrictEqual({ background: '#333333', handle: '#FFFFFF' })
  })

  it('should set handle `colors`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          colors: {
            handle: '#F1F1F1'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.colors).toStrictEqual({ background: '#777777', handle: '#F1F1F1' })
  })

  it('should set handle & background `colors`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          colors: {
            handle: '#F1F1F1',
            background: '#333333',
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.colors).toStrictEqual({ background: '#333333', handle: '#F1F1F1' })
  })

  it('should set `colors` to schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.colors = {
      handle: '#F1F1F1',
      background: '#333333',
    }

    expect(el.schema.colors).toStrictEqual({ background: '#333333', handle: '#F1F1F1' })
  })
}

export const options = function (elementType, elementName, options) {
  it('should have default `options`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.options).toStrictEqual({ 
      labels: el.labels,
      speed: el.speed,
      width: el.dimensions.width,
      height: el.dimensions.height,
      color: el.colors.background,
      switchColor: el.colors.handle,
      cssColors: el.cssColors,
      disabled: el.disabled,
    })
  })
  
  it('should extend `options` from schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          options: {
            custom: 'option'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.options).toStrictEqual({ 
      labels: el.labels,
      speed: el.speed,
      width: el.dimensions.width,
      height: el.dimensions.height,
      color: el.colors.background,
      switchColor: el.colors.handle,
      cssColors: el.cssColors,
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
  
  it('should bind `options` to toggle button', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let ToggleButton = findAllComponents(elWrapper, { name: 'ToggleButton' }).at(0)
    
    expect(ToggleButton.props('speed')).toBe(el.speed)
    expect(ToggleButton.props('color')).toBe(el.colors.background)
    expect(ToggleButton.props('switchColor')).toBe(el.colors.handle)
    expect(ToggleButton.props('cssColors')).toBe(el.cssColors)
    expect(ToggleButton.props('labels')).toStrictEqual(el.labels)
    expect(ToggleButton.props('height')).toBe(el.dimensions.height)
    expect(ToggleButton.props('width')).toBe(el.dimensions.width)
  })
}