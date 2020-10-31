import { createForm, findAllComponents, testValue, setValue } from 'test-helpers'
import { currentValue as currentValueBase, previousValue as previousValueBase } from './value'
import { nextTick } from 'vue'

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

    let el = findAllComponents(form, { name: elementName }).at(0)

    expect(el.vm.value).toStrictEqual({
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

    let el = findAllComponents(form, { name: elementName }).at(0)

    expect(() => {
      el.vm.value = {}
    }).toThrowError()
  })
}

export const currentValue = function (elementType, elementName) {
  currentValueBase(elementType, elementName)

  it('should update `currentValue` on nextTick when data changes', async () => {
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

    let el = findAllComponents(form, { name: elementName }).at(0)

    await nextTick()

    expect(el.vm.currentValue).toStrictEqual({
      child1: 'value',
      child2: 'value2',
    })
  })
}

export const previousValue = function (elementType, elementName) {
  previousValueBase(elementType, elementName)

  it('should update `previousValue` on nextTick when data changes', async () => {
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

    let el = findAllComponents(form, { name: elementName }).at(0)
    let child1 = findAllComponents(form, { name: 'TextElement' }).at(0)
    let child2 = findAllComponents(form, { name: 'TextElement' }).at(1)

    await nextTick()

    child1.vm.update('value-updated')
    child2.vm.update('value2-updated')

    await nextTick()

    expect(el.vm.previousValue).toStrictEqual({
      child1: 'value',
      child2: 'value2',
    })
  })
}

export default function (elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    _.each(exports, (suite) => {
      suite(elementType, elementName)
    })
  }
}