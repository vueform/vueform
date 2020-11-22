import { createForm, testComputedOption } from 'test-helpers'

export { loading, native, trackBy, search, limit, isNative } from './optionsSelect'

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
      multiple: true,
      clearOnSelect: true,
      closeOnSelect: false,
      preserveSearch: true,
      showLabels: true,
      selectLabel: '',
      deselectLabel: '✓',
      selectedLabel: '✓',
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
      multiple: true,
      clearOnSelect: true,
      closeOnSelect: false,
      preserveSearch: true,
      showLabels: true,
      selectLabel: '',
      deselectLabel: '✓',
      selectedLabel: '✓',
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