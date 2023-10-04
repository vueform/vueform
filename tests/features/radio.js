import { createForm, findAll, findAllComponents, destroy } from 'test-helpers'
import { nextTick } from 'vue'

export const inputName = function(elementType, elementName, options) {
  
  it('should `inputName` equal to path if radioName is not defined', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.inputName).toBe(el.path)
  })
  
  it('should return `radioName` if defined defined', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          radioName: 'someName',
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.inputName).toBe('someName')
  })
}

export const check = function (elementType, elementName, options) {
  it('should select radio on `check`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          radioValue: 1
        },
      }
    })

    let el = form.vm.el$('el')
    
    el.check()

    expect(el.value).toBe(1)

    // destroy() // teardown
  })
}

export const uncheck = function (elementType, elementName, options) {
  it('should deselect radio on `uncheck`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          radioValue: 1,
          default: 1
        },
      }
    })

    let el = form.vm.el$('el')
    
    el.uncheck()

    expect(el.value).toBe(null)

    // destroy() // teardown
  })
}


export const watchers = function (elementType, elementName, options) {
  
  it('should deselect other radios with the same `fieldName`', () => {
    
    let form = createForm({
      schema: {
        el1: {
          type: elementType,
          radioValue: 1,
          radioName: 'radio',
        },
        el2: {
          type: elementType,
          radioValue: 2,
          radioName: 'radio',
        },
      }
    }, {
      attach: true
    })
    
    let el1 = form.vm.el$('el1')
    let el2 = form.vm.el$('el2')
    
    let el1Wrapper = findAllComponents(form, { name: elementName }).at(0)
    let el2Wrapper = findAllComponents(form, { name: elementName }).at(1)
    
    let input1 = el1Wrapper.find(`input[type="${options.fieldType}"]`)
    let input2 = el2Wrapper.find(`input[type="${options.fieldType}"]`)
    
    input1.setChecked('change', { value: 1 })
    expect(el1.value).toBe(1)
    expect(el2.value).toBe(null)
    
    input2.setChecked('change', { value: 2 })
    expect(el1.value).toBe(null)
    expect(el2.value).toBe(2)
    
    destroy(form)
    
    // destroy() // teardown
  })
  
  it('should trigger watchChange on value change', async () => {
    
    let elementMock
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          onMounted(el$) {
            
            elementMock = jest.spyOn(el$.input, 'removeEventListener').mockImplementation()
          }
        }
      }
    }, {
      attach: true,
    })
    
    const el = form.vm.el$('el')

    expect(elementMock).toHaveBeenCalledTimes(0)
    
    el.$set(form.vm.vueform.schema.el, 'radioName', 'something')

    await nextTick()
    
    expect(elementMock).toHaveBeenCalledTimes(1)
  
    destroy(form)
  })
}