import { createForm, destroy } from 'test-helpers'
import flushPromises from 'flush-promises'
import { createValidImageFile } from '../helpers'

export { load, update, clear, reset } from './data'

export const data = function (elementType, elementName, options) {
  
  it('should un-bundle response and delete created __file__ property from data', async () => {
    
    const postStub = jest.fn(() => ({
      data: {
        tmp: 'tmp_name',
        originalName: 'filename.jpg',
      }
    }))
    
    const file = await createValidImageFile()
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: true,
          view: 'image',
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.request = postStub
          }
        }
      }
    })
    
    const el = form.vm.el$('el')
    
    
    el.update(file)
    
    await flushPromises()
    
    expect(el.data.__file__).toBe(undefined)
  })

  it('should have "data" as an object with element name as property and element value as value by default', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: options.default
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.data).toStrictEqual({
      el: el.value
    })

    // destroy() // teardown
  })
}

export const requestData = function (elementType, elementName, options) {
  
  it('should un-bundle response and delete created __file__ property from requestData', async () => {
    
    const postStub = jest.fn(() => ({
      data: {
        tmp: 'tmp_name',
        originalName: 'filename.jpg',
      }
    }))
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: true,
          onBeforeCreate(el$) {
            el$.$vueform.services.axios.request = postStub
          }
        }
      }
    })
    
    const el = form.vm.el$('el')
    
    el.update(new File([''], 'filename.jpg'))
    
    await flushPromises()
    
    expect(el.requestData.__file__).toBe(undefined)
  })
  
  it('should have formatted `requestData` if formatData exists', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: options.value,
          formatData(name, value) {
            return {
              someKey: {
                [name]: options.formattedValue
              }
            }
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.requestData.someKey).toStrictEqual({ el: options.formattedValue })
    
    // destroy(form) // teardown
  })
  
  it('should have `requestData` equal to `data` if there are no conditions', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: options.default
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.requestData).toStrictEqual(el.data)
    
    // destroy(form) // teardown
  })

  it('should have `requestData` equal to `data` if there are met conditions', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: options.default,
          conditions: [
            ['el2', 'value2']
          ]
        },
        el2: {
          type: 'text',
          default: 'value2',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.requestData).toStrictEqual(el.data)
    
    // destroy(form) // teardown
  })

  it('should have empty object for `requestData` if there are unmet conditions', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          default: options.default,
          conditions: [
            ['el2', 'value2']
          ]
        },
        el2: {
          type: 'text',
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.requestData).toStrictEqual({})

    // destroy() // teardown
  })
}


