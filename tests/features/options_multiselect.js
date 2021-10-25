import { createForm, testPropDefault, destroy } from 'test-helpers'
import { nextTick } from 'composition-api'

export { isNative, } from './options_select'

export const fieldOptions = function (elementType, elementName, options) {
  it('should have default `options`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.fieldOptions.mode).toStrictEqual('multiple')
    expect(el.fieldOptions.searchable).toStrictEqual(el.search)
    expect(el.fieldOptions.noOptionsText).toStrictEqual(el.__('laraform.multiselect.noOptions'))
    expect(el.fieldOptions.noResultsText).toStrictEqual(el.__('laraform.multiselect.noResults'))
    expect(el.fieldOptions.multipleLabel([1])).toStrictEqual(el.__('laraform.multiselect.multipleLabelOne'))
    expect(el.fieldOptions.multipleLabel([1,2])).toStrictEqual(el.__('laraform.multiselect.multipleLabelMore', { options: 2 }))
  })
  
  it('should extend `options` from schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          extendOptions: {
            custom: 'option'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.fieldOptions.mode).toStrictEqual('multiple')
    expect(el.fieldOptions.searchable).toStrictEqual(el.search)
    expect(el.fieldOptions.noOptionsText).toStrictEqual(el.__('laraform.multiselect.noOptions'))
    expect(el.fieldOptions.noResultsText).toStrictEqual(el.__('laraform.multiselect.noResults'))
    expect(el.fieldOptions.multipleLabel([1])).toStrictEqual(el.__('laraform.multiselect.multipleLabelOne'))
    expect(el.fieldOptions.multipleLabel([1,2])).toStrictEqual(el.__('laraform.multiselect.multipleLabelMore', { options: 2 }))
    expect(el.fieldOptions.custom).toStrictEqual('option')
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
    
    _.each(el.fieldOptions, (value, key) => {
      expect(Multiselect.props(key)).toStrictEqual(value)
    })

    // destroy() // teardown
  })
}