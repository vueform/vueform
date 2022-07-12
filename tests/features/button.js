import { createForm, createElement, findAll, destroy } from 'test-helpers'
import { nextTick, markRaw } from 'vue'
import flushPromises from 'flush-promises'

export const isLoading = function (elementType, elementName, options) {
  it('should be equal to loading value if boolean', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          loading: false
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isLoading).toBe(false)

    el.$set(form.vm.vueform.schema.el, 'loading', true)

    await nextTick()

    expect(el.isLoading).toBe(true)    
    
    // destroy(form) // teardown
  })

  it('should be equal to loading value if function', async () => {
    let form = createForm({
      loading: false,
      schema: {
        el: {
          type: elementType,
          loading(form$, el$) {
            return form$.vueform.loading
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isLoading).toBe(false)

    el.$set(form.vm.vueform, 'loading', true)

    await nextTick()

    expect(el.isLoading).toBe(true)
    
    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const isButtonLabelComponent = function (elementType, elementName, options) {
  it('should return true & render component if label is a component buttonType=button', async() => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          buttonLabel: 'String'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isButtonLabelComponent).toBe(false)
    expect(findAll(form, 'button').at(0).element.innerHTML).toBe('String')

    el.$set(form.vm.vueform.schema.el, 'buttonLabel', null)
    await nextTick()
    expect(el.isButtonLabelComponent).toBe(false)

    el.$set(form.vm.vueform.schema.el, 'buttonLabel', markRaw({
      props: ['el$'],
      render(h) {
        return createElement(h, 'div', 'hello')
      }
    }))
    await nextTick()
    expect(el.isButtonLabelComponent).toBe(true)
    expect(findAll(form, 'button').at(0).element.innerHTML).toBe('<div>hello</div>')    
    
    // destroy(form) // teardown
  })

  it('should return true & render component if label is a component buttonType=anchor', async() => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          buttonType: 'anchor',
          buttonLabel: 'String'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.isButtonLabelComponent).toBe(false)
    expect(findAll(form, 'a').at(0).element.innerHTML).toBe('String')

    el.$set(form.vm.vueform.schema.el, 'buttonLabel', null)
    await nextTick()
    expect(el.isButtonLabelComponent).toBe(false)

    el.$set(form.vm.vueform.schema.el, 'buttonLabel', markRaw({
      props: ['el$'],
      render(h) {
        return createElement(h, 'div', 'hello')
      }
    }))
    await nextTick()
    expect(el.isButtonLabelComponent).toBe(true)
    expect(findAll(form, 'a').at(0).element.innerHTML).toBe('<div>hello</div>')
    
    // destroy(form) // teardown

    // destroy() // teardown
  })
}

export const button = function (elementType, elementName, options) {
  it('should include href & target when anchor and assign to a', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          buttonType: 'anchor',
          buttonLabel: 'String',
          href: 'href',
          target: 'target',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.button).toStrictEqual({
      href: 'href',
      target: 'target',
      id: 'el',
    })
    expect(findAll(form, 'a').at(0).element.href).toContain('href')
    expect(findAll(form, 'a').at(0).element.target).toBe('target')

    el.$set(form.vm.vueform.schema.el, 'buttonLabel', markRaw({
      props: ['el$'],
      render(h) {
        return createElement(h, 'div', 'hello')
      }
    }))
    await nextTick()
    expect(findAll(form, 'a').at(0).element.href).toContain('href')
    expect(findAll(form, 'a').at(0).element.target).toBe('target')    
    
    // destroy(form) // teardown
  })

  it('should include disabled when button and assign to button', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          buttonType: 'button',
          buttonLabel: 'String',
          disabled: true
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.button).toStrictEqual({
      disabled: true,
      id: 'el',
    })
    expect(findAll(form, 'button').at(0).element.disabled).toBeTruthy()

    el.$set(form.vm.vueform.schema.el, 'buttonLabel', markRaw({
      props: ['el$'],
      render(h) {
        return createElement(h, 'div', 'hello')
      }
    }))
    await nextTick()
    expect(findAll(form, 'button').at(0).element.disabled).toBeTruthy()
    
    // destroy(form) // teardown
  })
}

export const handleClick = function (elementType, elementName, options) {
  it('should prevent if has no href and buttonType=anchor', async () => {
    let preventMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          buttonType: 'anchor',
        }
      }
    })

    let el = form.vm.el$('el')

    el.handleClick({ preventDefault: preventMock, })
    expect(preventMock).toHaveBeenCalledTimes(1)

    el.$set(form.vm.vueform.schema.el, 'href', 'href')
    await nextTick()
    el.handleClick({ preventDefault: preventMock, })
    expect(preventMock).toHaveBeenCalledTimes(1)
    
    // destroy(form) // teardown
  })

  it('should return if disabled or loading and call onClick with form$ if not', async () => {
    let onClickMock = jest.fn()
    let preventMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onClick: onClickMock,
          disabled: true,
          loading: true,
        }
      }
    })

    let el = form.vm.el$('el')

    el.handleClick({ preventDefault: preventMock, })
    expect(preventMock).toHaveBeenCalledTimes(1)
    expect(onClickMock).not.toHaveBeenCalled()

    el.$set(form.vm.vueform.schema.el, 'disabled', false)
    await nextTick()
    el.handleClick({ preventDefault: preventMock, })
    expect(preventMock).toHaveBeenCalledTimes(2)
    expect(onClickMock).not.toHaveBeenCalled()

    el.$set(form.vm.vueform.schema.el, 'loading', false)
    el.$set(form.vm.vueform.schema.el, 'disabled', true)
    await nextTick()
    el.handleClick({ preventDefault: preventMock, })
    expect(preventMock).toHaveBeenCalledTimes(3)
    expect(onClickMock).not.toHaveBeenCalled()

    el.$set(form.vm.vueform.schema.el, 'disabled', false)
    await nextTick()
    el.handleClick({ preventDefault: preventMock, })
    expect(preventMock).toHaveBeenCalledTimes(3)
    expect(onClickMock.mock.calls[0][0].$options.name).toBe('Vueform')
    expect(onClickMock.mock.calls[0][1].$options.name).toBe('ButtonElement')
    
    // destroy(form) // teardown
  })

  it('should reset on click if resets true', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          resets: true,
        },
        el2: {
          type: 'text'
        }
      }
    })

    let el = form.vm.el$('el')
    let el2 = form.vm.el$('el2')

    el2.load('value')

    el.handleClick()

    expect(el2.value).toBe(el2.nullValue)    
    
    // destroy(form) // teardown
  })

  it('should submit on click if submits true', async () => {
    let requestMock = jest.fn(() => ({ data: {} }))

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          submits: true,
        },
      }
    })

    let el = form.vm.el$('el')

    form.vm.$vueform.services.axios.request = requestMock

    el.handleClick()

    await flushPromises()
    await flushPromises()

    expect(requestMock).toHaveBeenCalled()
    
    // destroy(form) // teardown
  })

  it('should trigger on click buttonType=anchor', async () => {
    let onClickMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          buttonType: 'anchor',
          label: 'String',
          onClick: onClickMock,
        },
      }
    })

    let a = findAll(form, 'a').at(0)

    a.trigger('click')
    expect(onClickMock).toHaveBeenCalled()

    form.vm.$set(form.vm.vueform.schema.el, 'label', markRaw({
      props: ['el$'],
      render(h) {
        return createElement(h, 'div', 'hello')
      }
    }))
    await nextTick()
    a.trigger('click')
    expect(onClickMock).toHaveBeenCalledTimes(2)    
    
    // destroy(form) // teardown
  })

  it('should trigger on click buttonType=button', async () => {
    let onClickMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          buttonType: 'button',
          label: 'String',
          onClick: onClickMock,
        },
      }
    })

    let button = findAll(form, 'button').at(0)

    button.trigger('click')
    expect(onClickMock).toHaveBeenCalled()

    form.vm.$set(form.vm.vueform.schema.el, 'label', markRaw({
      props: ['el$'],
      render(h) {
        return createElement(h, 'div', 'hello')
      }
    }))
    await nextTick()
    button.trigger('click')
    expect(onClickMock).toHaveBeenCalledTimes(2)
    
    // destroy(form) // teardown
  })
}