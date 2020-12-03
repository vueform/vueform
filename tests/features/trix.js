import { createForm, findAllComponents, testComputedOption, testAttribute } from 'test-helpers'

export const accept = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'accept', [], ['jpg', 'png'])

  it('should pass `accept` to Trix component', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          accept: ['jpg', 'png'],
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let Trix = findAllComponents(elWrapper, { name: 'Trix' }).at(0)

    expect(Trix.props('accept')).toStrictEqual(el.accept)
  })
}

export const acceptMimes = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'acceptMimes', [], ['image/jpeg', 'image/png'])
  
  it('should pass `acceptMimes` to Trix component', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          acceptMimes: ['image/jpeg', 'image/png'],
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let Trix = findAllComponents(elWrapper, { name: 'Trix' }).at(0)

    expect(Trix.props('acceptMimes')).toStrictEqual(el.acceptMimes)
  })
}

export const endpoint = function (elementType, elementName, options) {
  let form = createForm({
    schema: {
      el: {
        type: elementType,
      }
    }
  })

  testComputedOption(it, elementType, 'endpoint', form.vm.$laraform.endpoints.elements.trix.attachment, 'custom-endpoint')
  
  it('should pass `endpoint` to Trix component', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let Trix = findAllComponents(elWrapper, { name: 'Trix' }).at(0)

    expect(Trix.props('endpoint')).toStrictEqual(el.endpoint)
  })
}