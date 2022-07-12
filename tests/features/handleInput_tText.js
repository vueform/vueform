import flushPromises from 'flush-promises'
import { createForm, findAllComponents, destroy } from 'test-helpers'
import { nextTick } from 'vue'

export const handleInput = function (elementType, elementName, options) {
  it('should set model on input', () => {
    let form = createForm({
      languages: {en:'English',fr:'French'},
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    elWrapper.get(options.fieldType).setValue('value')

    expect(el.model).toBe('value')
    
    // destroy(form) // teardown
  })

  it('should dirt the element if input value is different than the current', async () => {
    let form = createForm({
      languages: {en:'English',fr:'French'},
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(el.dirty).toBe(false)

    elWrapper.get(options.fieldType).setValue('value')

    await nextTick()

    expect(el.dirty).toBe(true)
    
    // destroy(form) // teardown
  })

  it('should not dirt the element on if input value is not different than the current', () => {
    let form = createForm({
      languages: {en:'English',fr:'French'},
      schema: {
        el: {
          type: elementType,
          default: 'value'
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    expect(el.dirty).toBe(false)

    elWrapper.get(options.fieldType).setValue('value')

    expect(el.dirty).toBe(false)
    
    // destroy(form) // teardown
  })

  it('should trigger "change" event if value changed', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      languages: {en:'English',fr:'French'},
      schema: {
        el: {
          type: elementType,
          onChange: onChangeMock
        }
      }
    })

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    elWrapper.get(options.fieldType).setValue('value')

    await nextTick()

    expect(onChangeMock).toHaveBeenCalled()
    
    // destroy(form) // teardown
  })

  it('should not trigger "change" event if value not changed', () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      languages: {en:'English',fr:'French'},
      schema: {
        el: {
          type: elementType,
          onChange: onChangeMock,
          default: 'value',
        }
      }
    })
    
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    elWrapper.get(options.fieldType).setValue('value')

    expect(onChangeMock).not.toHaveBeenCalled()
    
    // destroy(form) // teardown
  })

  it('should trigger validation on change if validateOn contains "change"', async () => {
    let form = createForm({
      validateOn: 'submit',
      languages: {en:'English',fr:'French'},
      schema: {
        el: {
          type: elementType,
          rules: 'required',
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)

    elWrapper.get(options.fieldType).setValue('value')

    await flushPromises()

    expect(el.state.validated.en).toBe(false)

    form.vm.vueform.validateOn = 'change'

    elWrapper.get(options.fieldType).setValue('value2')

    await flushPromises()

    expect(el.state.validated.en).toBe(true)

    // destroy() // teardown
  })
}