import flushPromises from 'flush-promises'
import { createForm, findAllComponents, findAll } from 'test-helpers'
import { nextTick } from 'composition-api'

export const handleChange = function (elementType, elementName, options) {
  it('should dirt the element if input value is different than the current', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: options.items
        }
      }
    })

    await nextTick()

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let select = findAll(elWrapper, `select`).at(0)
    let option0 = findAll(select, `option`).at(0)

    expect(el.dirty).toBe(false)

    option0.setSelected()

    expect(el.dirty).toBe(true)
  })

  it('should not dirt the element if input value is not different than the current', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          items: options.items,
          default: _.keys(options.items)[0],
        }
      }
    })

    await nextTick()

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let select = findAll(elWrapper, `select`).at(0)
    let option0 = findAll(select, `option`).at(0)

    expect(el.dirty).toBe(false)

    option0.setSelected()
    
    expect(el.dirty).toBe(false)
  })

  it('should trigger "change" event if value changed', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onChange: onChangeMock,
          items: options.items,
        }
      }
    })

    await nextTick()

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let select = findAll(elWrapper, `select`).at(0)
    let option0 = findAll(select, `option`).at(0)

    option0.setSelected()

    expect(onChangeMock).toHaveBeenCalled()
  })

  it('should not trigger "change" event if value has not changed', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onChange: onChangeMock,
          items: options.items,
          default: _.keys(options.items)[0],
        }
      }
    })

    await nextTick()

    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let select = findAll(elWrapper, `select`).at(0)
    let option0 = findAll(select, `option`).at(0)

    option0.setSelected()

    expect(onChangeMock).not.toHaveBeenCalled()
  })

  it('should trigger validation on if validateOn contains "change"', async () => {
    let form = createForm({
      validateOn: 'submit',
      schema: {
        el: {
          type: elementType,
          rules: 'required',
          items: options.items
        }
      }
    })

    await nextTick()

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let select = findAll(elWrapper, `select`).at(0)
    let option0 = findAll(select, `option`).at(0)
    let option1 = findAll(select, `option`).at(1)

    option0.setSelected()

    await flushPromises()

    expect(el.validated).toBe(false)

    form.vm.validateOn = 'submit|change'

    option1.setSelected()

    await flushPromises()

    expect(el.validated).toBe(true)
  })

  it('should trigger `handleChange` on native change', async () => {
    let onChangeMock = jest.fn()

    let form = createForm({
      validateOn: 'submit',
      schema: {
        el: {
          type: elementType,
          native: true,
          items: options.items,
          onChange: onChangeMock,
        }
      }
    })

    await nextTick()

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let select = findAll(elWrapper, `select`).at(0)
    let option0 = findAll(select, `option`).at(0)

    option0.setSelected()

    expect(onChangeMock).toHaveBeenCalledWith(el.currentValue, el.previousValue)
  })
}