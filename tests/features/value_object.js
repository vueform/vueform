import { createForm } from 'test-helpers'
import { currentValue as currentValueBase, previousValue as previousValueBase } from './value'

export const currentValue = function (elementType, elementName) {
  currentValueBase(elementType, elementName)

  it('should `currentValue` be equal to children value on load', async () => {
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
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.currentValue).toStrictEqual({
      child1: null,
      child2: null,
    })
  })

  it('should update `currentValue` when data changes', async () => {
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
            },
          }
        }
      }
    })

    let el = form.vm.el$('el')
    let child1 = form.vm.el$('el.child1')

    child1.update('value-updated')

    expect(el.currentValue).toStrictEqual({
      child1: 'value-updated',
      child2: 'value2',
    })
  })
}

export const previousValue = function (elementType, elementName) {
  previousValueBase(elementType, elementName)

  it('should update `previousValue` when data changes', async () => {
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
            },
          }
        }
      }
    })

    let el = form.vm.el$('el')
    let child1 = form.vm.el$('el.child1')

    child1.update('value-updated')

    expect(el.previousValue).toStrictEqual({
      child1: 'value',
      child2: 'value2',
    })
  })
}

export const value = function (elementType, elementName) {
  it('should have `value` equal to an object of children values', () => {
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
            },
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.value).toStrictEqual({
      child1: 'value',
      child2: 'value2',
    })
  })

  it('should throw an error on setting value', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(() => {
      el.value = {}
    }).toThrowError()
  })
}