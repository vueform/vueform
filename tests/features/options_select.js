import { createForm, testPropDefault } from 'test-helpers'
import { nextTick } from 'composition-api'

export const isNative = function (elementType, elementName, options) {
  it('should have `isNative` "true" if "native" is true and "search" is false', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.isNative).toBe(true)

    el.$set(form.vm.laraform.schema.el, 'native', false)
    await nextTick()
    expect(el.isNative).toBe(false)

    el.$set(form.vm.laraform.schema.el, 'native', true)
    el.$set(form.vm.laraform.schema.el, 'search', true)
    await nextTick()
    expect(el.isNative).toBe(false)
  })
}

export const fieldOptions = function (elementType, elementName, options) {
  it('should have default `fieldOptions`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.fieldOptions).toStrictEqual({
      mode: 'single',
      searchable: el.search,
      noOptionsText: el.__('laraform.multiselect.noOptions'),
      noResultsText: el.__('laraform.multiselect.noResults'),
    })
  })
  
  it('should extend `fieldOptions` from schema', () => {
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

    expect(el.fieldOptions).toStrictEqual({
      mode: 'single',
      searchable: el.search,
      noOptionsText: el.__('laraform.multiselect.noOptions'),
      noResultsText: el.__('laraform.multiselect.noResults'),
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

    _.each(el.fieldOptions, (value, key) => {
      expect(Multiselect.props(key)).toStrictEqual(value)
    })
  })
}