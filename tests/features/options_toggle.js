import { createForm, testPropDefault } from 'test-helpers'

export const labels = function (elementType, elementName, options) {
  testPropDefault(it, elementType, 'labels', false, { on: 'foo', off: 'bar' })
}

export const speed = function (elementType, elementName, options) {
  testPropDefault(it, elementType, 'speed', 300, 500)
}

export const width = function (elementType, elementName, options) {
  testPropDefault(it, elementType, 'width', 54, 60)
}

export const height = function (elementType, elementName, options) {
  testPropDefault(it, elementType, 'height', 24, 30)
}

export const colors = function (elementType, elementName, options) {
  testPropDefault(it, elementType, 'colors', {}, {background:{on:'blue'}})
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
      disabled: el.disabled,
      onLabel: el.labels.on,
      offLabel: '',
      width: el.width,
      height: el.height,
      speed: el.speed,
      colors: el.colors,
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
      disabled: el.disabled,
      onLabel: el.labels.on,
      offLabel: '',
      width: el.width,
      height: el.height,
      speed: el.speed,
      colors: el.colors,
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
    let Toggle = findAllComponents(elWrapper, { name: 'Toggle' }).at(0)
    
    _.each(el.options, (value, key) => {
      expect(Toggle.props(key)).toStrictEqual(value)
    })
  })
}