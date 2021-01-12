import { createForm, testComputedOption } from 'test-helpers'

export const buttonLabel = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'buttonLabel', '', 'Button')
}

export const buttonType = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'buttonType', 'button', 'anchor')
}

export const buttonClass = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'buttonClass', null, 'btn-class')
}

export const disabled = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'disabled', false, true)
}

export const loading = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'loading', false, true)
}

export const href = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'href', null, 'url')
}

export const target = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'target', '_self', '_blank')
}

export const align = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'align', 'left', 'right')
}

export const onClick = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'onClick', null, 'click')
}

export const buttonComponent = function (elementType, elementName, options) {
  it('should return FormButton by default if button type is not defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          buttonLabel: 'Button'
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.buttonComponent).toStrictEqual(el.components.FormButton)
  })

  it('should return anchor button if button type is anchor', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          buttonType: 'anchor',
          buttonLabel: 'Button'
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.buttonComponent).toStrictEqual(el.components.FormButtonAnchor)
  })

  it('should return submit button if button type is submit', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          buttonType: 'submit',
          buttonLabel: 'Button'
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.buttonComponent).toStrictEqual(el.components.FormButtonSubmit)
  })

  it('should throw error for `component` if button type not found', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          buttonLabel: 'Button'
        }
      }
    })
    let el = form.vm.el$('el')

    const originalConsoleError = console.error
    const originalConsoleWarn = console.warn
    console.error = () => {}
    console.warn = () => {}

    expect(() => {
      el.buttonType = 'unknown'
    }).toThrowError()

    console.error = originalConsoleError
    console.warn = originalConsoleWarn
  })
}

export const button = function (elementType, elementName, options) {
  it('should return schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.button).toStrictEqual({
      label: el.buttonLabel,
      class: el.buttonClass,
      disabled: el.disabled,
      loading: el.loading,
      href: el.href,
      target: el.target,
      onClick: el.onClick,
      align: el.align,
    })
  })
}