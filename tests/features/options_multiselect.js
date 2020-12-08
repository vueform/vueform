import { createForm, testComputedOption } from 'test-helpers'
import { nextTick } from 'composition-api'

export { loading, native, trackBy, search, limit, isNative, maxHeight, noOptionsText, noResultsText, } from './options_select'

export const multipleLabel = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'multipleLabel', null, (val) => val.length + ' options', false)

  it('should render `multipleLabel` when non-native', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
          multipleLabel: (val) => val.length + ' options',
          items: [1,2],
          default: [0,1]
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    await nextTick()
    
    expect(elWrapper.html()).toContain('2 options')
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
      mode: 'multiple',
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
      mode: 'multiple',
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