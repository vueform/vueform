import { createForm, testComputedOption } from 'test-helpers'

export const loading = function (elementType, elementName, options) {
  it('should have `loading` "false" by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.loading).toBe(false)
  })
}

export const native = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'native', true, false)
}

export const trackBy = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'trackBy', 'label', 'name')
}

export const search = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'search', false, true)
}

export const limit = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'limit', 20, 10)
}

export const isNative = function (elementType, elementName, options) {
  it('should have `isNative` "true" if "native" is true and "search" is false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.isNative).toBe(true)

    el.native = false
    expect(el.isNative).toBe(false)

    el.native = true
    el.search = true
    expect(el.isNative).toBe(false)
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
      showLabels: false,
      searchable: el.search,
      label: 'label',
      trackBy: el.trackBy,
      loading: el.loading,
      optionsLimit: el.limit,
      multiple: false,
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
      showLabels: false,
      searchable: el.search,
      label: 'label',
      trackBy: el.trackBy,
      loading: el.loading,
      optionsLimit: el.limit,
      multiple: false,
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
  
  it('should bind `options` to VueMultiselect when not native', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let VueMultiselect = findAllComponents(elWrapper, { name: 'VueMultiselect' }).at(0)
    
    _.each(el.options, (value, key) => {
      expect(VueMultiselect.props(key)).toStrictEqual(value)
    })
  })
}