import { createForm, testPropDefault } from 'test-helpers'
import { nextTick } from 'composition-api'

export { native, search, isNative, } from './options_select'

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

    expect(el.options.mode).toStrictEqual('multiple')
    expect(el.options.searchable).toStrictEqual(el.search)
    expect(el.options.noOptionsText).toStrictEqual(el.__('laraform.multiselect.noOptions'))
    expect(el.options.noResultsText).toStrictEqual(el.__('laraform.multiselect.noResults'))
    expect(el.options.multipleLabel([1])).toStrictEqual(el.__('laraform.multiselect.multipleLabelOne'))
    expect(el.options.multipleLabel([1,2])).toStrictEqual(el.__('laraform.multiselect.multipleLabelMore', { options: 2 }))
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

    expect(el.options.mode).toStrictEqual('multiple')
    expect(el.options.searchable).toStrictEqual(el.search)
    expect(el.options.noOptionsText).toStrictEqual(el.__('laraform.multiselect.noOptions'))
    expect(el.options.noResultsText).toStrictEqual(el.__('laraform.multiselect.noResults'))
    expect(el.options.multipleLabel([1])).toStrictEqual(el.__('laraform.multiselect.multipleLabelOne'))
    expect(el.options.multipleLabel([1,2])).toStrictEqual(el.__('laraform.multiselect.multipleLabelMore', { options: 2 }))
    expect(el.options.custom).toStrictEqual('option')
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