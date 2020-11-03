import { testComputedOption, createForm } from 'test-helpers'

export default function default_ (elementType) {

  return () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType
        }
      }
    })

    let el = form.vm.el$('el')

    testComputedOption(it, elementType, 'default', el.nullValue, 'value')
  }
}