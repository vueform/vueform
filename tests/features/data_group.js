export { data, clear, reset } from './data_object'

export const requestData = function(elementType, elementName) {
  
  it('should have formatted `requestData` if formatData exists', () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          formatData(name, value) {
            return {
              someKey: {
                [name]: `${value}-formatted`
              }
            }
          }
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.requestData.someKey).toStrictEqual({ el: `${el.data}-formatted` })
    
    // destroy(form) // teardown
  })
  
  it('should have empty object as `requestData` if not available', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child1: {
              type: 'text',
            },
            child2: {
              type: 'text',
            },
          },
          conditions: [
            ['el2', 'value'],
          ],
        },
        el2: {
          type: 'text',
        },
      },
    })
    
    let el = form.vm.el$('el')
    
    expect(el.requestData).toStrictEqual({})
    
    // destroy(form) // teardown
  })
  
  it('should not contain child that is a static element', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child1: {
              type: 'static',
            },
            child2: {
              type: 'text',
              default: 'value',
            },
          },
        },
      },
    })
    
    let el = form.vm.el$('el')
    
    expect(el.requestData).toStrictEqual({
      child2: 'value'
    })
    
    // destroy() // teardown
  })
  
  it('should have `requestData` equal to available children requestData values', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child1: {
              type: 'text',
              default: 'value',
            },
            child2: {
              type: 'text',
              default: 'value2',
              conditions: [
                ['el.child1', 'value2'],
              ],
            },
            child3: {
              type: elementType,
              schema: {
                child4: {
                  type: 'text',
                  default: 'value4',
                },
                child5: {
                  type: 'text',
                  default: 'value5',
                  conditions: [
                    ['el.child3.child4', 'value'],
                  ],
                },
              },
            },
          },
        },
      },
    })
    
    let el = form.vm.el$('el')
    
    if (el.flat) {
      expect(el.requestData).toStrictEqual({
        child1: 'value',
        child4: 'value4',
      })
    } else {
      expect(el.requestData).toStrictEqual({
        el: {
          child1: 'value',
          child3: {
            child4: 'value4',
          },
        },
      })
    }
    
    // destroy() // teardown
  })
}

export const load = function(elementType, elementName) {
  
  it('should not load into child that is a static element', async () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              type: 'static',
            },
          },
        },
      },
    })
    
    
    let el = form.vm.el$('el')
    
    el.load({ child: 'value' })
    
    expect(el.value).toStrictEqual({})
    
    // destroy() // teardown
  })
  
  it('should load data to children on `load`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              type: 'text',
            },
          },
        },
      },
    })
    
    let el = form.vm.el$('el')
    let child = form.vm.el$('el.child')
    
    el.load({ child: 'value' })
    
    expect(el.value).toStrictEqual({ child: 'value' })
    
    // destroy(form) // teardown
  })
  
  it('should should format data if "formatData" is "true" on `load`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              type: 'text',
              formatLoad(value)
              {
                return `${ value }-formatted`
              },
            },
          },
          formatLoad(value)
          {
            return {
              child: `pre-${ value.child }`,
            }
          },
        },
      },
    })
    
    let el = form.vm.el$('el')
    
    el.load({ child: 'value' }, true)
    
    expect(el.value).toStrictEqual({ child: 'pre-value-formatted' })
    
    // destroy() // teardown
  })
}

export const update = function(elementType, elementName) {
  
  it('should not update child that is a static element', async () => {
    
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              type: 'static',
            },
          },
        },
      },
    })
    
    let el = form.vm.el$('el')
    
    el.update({ child: 'value' })
    
    expect(el.value).toStrictEqual({})
    
    // destroy() // teardown
  })
  
  it('should not allow updating with undefined if element is flat', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              default: 'some-value',
              type: 'text',
            },
          },
        },
      },
    })
    
    let el = form.vm.el$('el')
    
    el.update({ child: undefined })
    
    expect(el.value).toStrictEqual({ child: 'some-value' })
  })
  
  it('should load data to children on `update`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child: {
              type: 'text',
            },
          },
        },
      },
    })
    
    let el = form.vm.el$('el')
    let child = form.vm.el$('el.child')
    
    el.update({ child: 'value' })
    
    expect(el.value).toStrictEqual({ child: 'value' })
    
    // destroy() // teardown
  })
}