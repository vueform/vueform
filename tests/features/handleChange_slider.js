import flushPromises from 'flush-promises'
import { createForm, findAllComponents, destroy } from 'test-helpers'
import { nextTick } from 'vue'

export const handleChange = function (elementType, elementName, options) {
  it('should set value on change when not range', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.input.update(5)

    expect(el.value).toBe(5)
    
    // destroy(form) // teardown
  })

  it('should set value on change when not range', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: [5,10]
        }
      }
    })

    let el = form.vm.el$('el')
    
    el.input.update([15,20])

    expect(el.value).toStrictEqual([15,20])
    
    // destroy(form) // teardown
  })

  it('should not dirt the element if input value is not different than the current when not range', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 5,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.dirty).toBe(false)

    el.input.update(5)

    expect(el.dirty).toBe(false)
    
    // destroy(form) // teardown
  })

  it('should dirt the element if input value is different than the current when not range', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 5,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.dirty).toBe(false)

    el.input.update(10)

    await nextTick()

    expect(el.dirty).toBe(true)
    
    // destroy(form) // teardown
  })

  it('should not dirt the element if input value is not different than the current when range', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: [5, 10],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.dirty).toBe(false)

    el.input.update([5, 10])

    expect(el.dirty).toStrictEqual(false)
    
    // destroy(form) // teardown
  })

  it('should dirt the element if input value is different than the current when range', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: [5, 10],
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.dirty).toBe(false)

    el.input.update([6, 10])

    await nextTick()

    expect(el.dirty).toStrictEqual(true)
    
    // destroy(form) // teardown
  })

  it('should not trigger "change" event if value not changed when not range', () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 5,
          onChange: onChangeMock
        }
      }
    })

    let el = form.vm.el$('el')

    el.input.update(5)

    expect(onChangeMock).not.toHaveBeenCalled()
    
    // destroy(form) // teardown
  })

  it('should not trigger "change" event if value not changed when range', () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: [5, 10],
          onChange: onChangeMock
        }
      }
    })

    let el = form.vm.el$('el')

    el.input.update([5, 10])

    expect(onChangeMock).not.toHaveBeenCalled()
    
    // destroy(form) // teardown
  })

  it('should trigger "change" event if value changed', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: 5,
          onChange: onChangeMock
        }
      }
    })

    let el = form.vm.el$('el')

    el.input.update(10)

    await nextTick()

    expect(onChangeMock).toHaveBeenCalledWith(10, 5, el)
    
    // destroy(form) // teardown
  })

  it('should trigger "change" event if value changed when range', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: [5, 10],
          onChange: onChangeMock
        }
      }
    })

    let el = form.vm.el$('el')

    el.input.update([15, 20])

    await nextTick()

    expect(onChangeMock).toHaveBeenCalledWith([15, 20], [5, 10], el)
    
    // destroy(form) // teardown
  })

  it('should trigger validation on if validateOn contains "change"', async () => {
    let form = createForm({
      validateOn: 'submit',
      schema: {
        el: {
          type: elementType,
          default: 5,
          rules: 'required',
        }
      }
    })

    let el = form.vm.el$('el')

    el.input.update(10)

    await flushPromises()

    expect(el.validated).toBe(false)

    form.vm.vueform.validateOn = 'submit|change'

    el.input.update(15)

    await flushPromises()

    expect(el.validated).toBe(true)

    // destroy() // teardown
  })
}