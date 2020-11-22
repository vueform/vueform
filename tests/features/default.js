import { testComputedOption, createForm } from 'test-helpers'

export const default_ = function (elementType, elementName, options) {
  let form = createForm({
    schema: {
      el: {
        type: elementType,
      }
    }
  })

  let el = form.vm.el$('el')

  testComputedOption(it, elementType, 'default', el.nullValue, options.value || 'value')
}