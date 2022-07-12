import { testPropDefault, createForm, destroy } from 'test-helpers'
import { nextTick } from 'vue'

export const displayDateFormat = function (elementType, elementName, options) {
  it('should equal to displayFormat if defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          displayFormat: 'DD-MM-YYYY'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.displayDateFormat).toBe('DD-MM-YYYY')
    
    // destroy(form) // teardown
  })

  it('should equal to default displayFormat if not defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.displayDateFormat).toBe(el.__('vueform.dateFormats.date'))

    // destroy() // teardown
  })
}

export const valueDateFormat = function (elementType, elementName, options) {
  it('should equal to valueFormat if defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: 'DD-MM-YYYY'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.valueDateFormat).toBe('DD-MM-YYYY')
    
    // destroy(form) // teardown
  })

  it('should equal to default valueFormat if not defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.valueDateFormat).toBe(el.__('vueform.dateFormats.date'))
    
    // destroy(form) // teardown
  })

  it('should equal to false if valueFormat is false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          valueFormat: false
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.valueDateFormat).toBe(false)

    // destroy() // teardown
  })
}

export const loadDateFormat = function (elementType, elementName, options) {
  it('should equal to loadFormat if defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          loadFormat: 'DD-MM-YYYY'
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.loadDateFormat).toBe('DD-MM-YYYY')
    
    // destroy(form) // teardown
  })

  it('should equal to default loadFormat if not defined', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.loadDateFormat).toBe(el.__('vueform.dateFormats.date'))
    
    // destroy(form) // teardown
  })

  it('should equal to false if loadFormat is false', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          loadFormat: false
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.loadDateFormat).toBe(false)

    // destroy() // teardown
  })
}