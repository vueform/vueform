import { createForm, testPropDefault, destroy } from 'test-helpers'
import { nextTick } from 'vue'

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
    expect(el.fieldOptions.noOptionsText).toStrictEqual(el.__('vueform.multiselect.noOptions'))
    expect(el.fieldOptions.noResultsText).toStrictEqual(el.__('vueform.multiselect.noResults'))
    expect(el.fieldOptions.locale).toStrictEqual('en')
    expect(el.fieldOptions.fallbackLocale).toStrictEqual('en')
    expect(el.fieldOptions.multipleLabel([1])).toStrictEqual(el.__('vueform.multiselect.multipleLabelOne'))
    expect(el.fieldOptions.multipleLabel([1,2])).toStrictEqual(el.__('vueform.multiselect.multipleLabelMore', { options: 2 }))
    expect(el.fieldOptions.label).toStrictEqual(el.labelProp)
    expect(el.fieldOptions.trackBy).toStrictEqual(el.trackBy)
    expect(el.fieldOptions.valueProp).toStrictEqual(el.valueProp)
    expect(el.fieldOptions.limit).toStrictEqual(el.limit)
    expect(el.fieldOptions.caret).toStrictEqual(el.caret)
    expect(el.fieldOptions.loading).toStrictEqual(el.loading)
    expect(el.fieldOptions.object).toStrictEqual(el.object)
    expect(el.fieldOptions.delay).toStrictEqual(el.delay)
    expect(el.fieldOptions.minChars).toStrictEqual(el.minChars)
    expect(el.fieldOptions.resolveOnLoad).toStrictEqual(el.resolveOnLoad)
    expect(el.fieldOptions.filterResults).toStrictEqual(el.filterResults)
    expect(el.fieldOptions.clearOnSearch).toStrictEqual(el.clearOnSearch)
    expect(el.fieldOptions.clearOnSelect).toStrictEqual(el.clearOnSelect)
    expect(el.fieldOptions.canClear).toStrictEqual(el.canClear)
    expect(el.fieldOptions.max).toStrictEqual(el.max)
    expect(el.fieldOptions.openDirection).toStrictEqual(el.openDirection)
    expect(el.fieldOptions.strict).toStrictEqual(el.strict)
    expect(el.fieldOptions.closeOnSelect).toStrictEqual(el.closeOnSelect)
    expect(el.fieldOptions.closeOnDeselect).toStrictEqual(el.closeOnDeselect)
    expect(el.fieldOptions.autocomplete).toStrictEqual(el.autocomplete)
    expect(el.fieldOptions.groups).toStrictEqual(el.groups)
    expect(el.fieldOptions.groupLabel).toStrictEqual(el.groupLabel)
    expect(el.fieldOptions.groupOptions).toStrictEqual(el.groupOptions)
    expect(el.fieldOptions.groupHideEmpty).toStrictEqual(el.groupHideEmpty)
    expect(el.fieldOptions.groupSelect).toStrictEqual(el.groupSelect)
    expect(el.fieldOptions.inputType).toStrictEqual(el.inputType)
    expect(el.fieldOptions.hideSelected).toStrictEqual(el.hideSelected)
    expect(el.fieldOptions.createOption).toStrictEqual(el.create)
    expect(el.fieldOptions.appendNewOption).toStrictEqual(el.appendNewOption)
    expect(el.fieldOptions.addOptionOn).toStrictEqual(el.addOptionOn)
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
    expect(el.fieldOptions.noOptionsText).toStrictEqual(el.__('vueform.multiselect.noOptions'))
    expect(el.fieldOptions.noResultsText).toStrictEqual(el.__('vueform.multiselect.noResults'))
    expect(el.fieldOptions.locale).toStrictEqual('en')
    expect(el.fieldOptions.fallbackLocale).toStrictEqual('en')
    expect(el.fieldOptions.multipleLabel([1])).toStrictEqual(el.__('vueform.multiselect.multipleLabelOne'))
    expect(el.fieldOptions.multipleLabel([1,2])).toStrictEqual(el.__('vueform.multiselect.multipleLabelMore', { options: 2 }))
    expect(el.fieldOptions.label).toStrictEqual(el.labelProp)
    expect(el.fieldOptions.trackBy).toStrictEqual(el.trackBy)
    expect(el.fieldOptions.valueProp).toStrictEqual(el.valueProp)
    expect(el.fieldOptions.limit).toStrictEqual(el.limit)
    expect(el.fieldOptions.caret).toStrictEqual(el.caret)
    expect(el.fieldOptions.loading).toStrictEqual(el.loading)
    expect(el.fieldOptions.object).toStrictEqual(el.object)
    expect(el.fieldOptions.delay).toStrictEqual(el.delay)
    expect(el.fieldOptions.minChars).toStrictEqual(el.minChars)
    expect(el.fieldOptions.resolveOnLoad).toStrictEqual(el.resolveOnLoad)
    expect(el.fieldOptions.filterResults).toStrictEqual(el.filterResults)
    expect(el.fieldOptions.clearOnSearch).toStrictEqual(el.clearOnSearch)
    expect(el.fieldOptions.clearOnSelect).toStrictEqual(el.clearOnSelect)
    expect(el.fieldOptions.canClear).toStrictEqual(el.canClear)
    expect(el.fieldOptions.max).toStrictEqual(el.max)
    expect(el.fieldOptions.openDirection).toStrictEqual(el.openDirection)
    expect(el.fieldOptions.strict).toStrictEqual(el.strict)
    expect(el.fieldOptions.closeOnSelect).toStrictEqual(el.closeOnSelect)
    expect(el.fieldOptions.closeOnDeselect).toStrictEqual(el.closeOnDeselect)
    expect(el.fieldOptions.autocomplete).toStrictEqual(el.autocomplete)
    expect(el.fieldOptions.groups).toStrictEqual(el.groups)
    expect(el.fieldOptions.groupLabel).toStrictEqual(el.groupLabel)
    expect(el.fieldOptions.groupOptions).toStrictEqual(el.groupOptions)
    expect(el.fieldOptions.groupHideEmpty).toStrictEqual(el.groupHideEmpty)
    expect(el.fieldOptions.groupSelect).toStrictEqual(el.groupSelect)
    expect(el.fieldOptions.inputType).toStrictEqual(el.inputType)
    expect(el.fieldOptions.hideSelected).toStrictEqual(el.hideSelected)
    expect(el.fieldOptions.createOption).toStrictEqual(el.create)
    expect(el.fieldOptions.appendNewOption).toStrictEqual(el.appendNewOption)
    expect(el.fieldOptions.addOptionOn).toStrictEqual(el.addOptionOn)
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