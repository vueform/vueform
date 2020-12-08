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

export const maxHeight = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'maxHeight', 160, 200)
}

export const noOptionsText = function (elementType, elementName, options) {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

  testComputedOption(it, elementType, 'noOptionsText', form.vm.__('laraform.multiselect.noOptions'), 'No options')

  it('should render `noOptionsText` when non-native', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          noOptionsText: 'No custom options',
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    
    expect(elWrapper.html()).toContain('No custom options')
  })
}

export const noResultsText = function (elementType, elementName, options) {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

  testComputedOption(it, elementType, 'noResultsText', form.vm.__('laraform.multiselect.noResults'), 'No results')

  it('should render `noResultsText` when non-native', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          noResultsText: 'No custom results',
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    
    expect(elWrapper.html()).toContain('No custom results')
  })
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
      searchable: el.search,
      label: 'label',
      trackBy: el.trackBy,
      loading: el.loading,
      limit: el.limit,
      mode: 'single',
      maxHeight: el.maxHeight,
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
      searchable: el.search,
      label: 'label',
      trackBy: el.trackBy,
      loading: el.loading,
      limit: el.limit,
      mode: 'single',
      maxHeight: el.maxHeight,
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
  
  it('should bind `options` to Multiselect when not native', () => {
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
    let Multiselect = findAllComponents(elWrapper, { name: 'Multiselect' }).at(0)
    
    _.each(el.options, (value, key) => {
      expect(Multiselect.props(key)).toStrictEqual(value)
    })
  })
}