import { createForm, findAllComponents, testComputedOption } from 'test-helpers'
import { nextTick } from 'vue'

// export const ___ = function (elementType, elementName) {
//   testComputedOption(it, elementType, '_____', defaultValue, testValue)
// }

export const child$ = function (elementType, elementName) {
  it('should have `child$` as an empty array by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = findAllComponents(form, { name: elementName }).at(0)

    expect(el.vm.child$).toStrictEqual([])
  })

  it('should collect elements to `child$`', async () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child1: {
              type: 'text'
            },
            child2: {
              type: 'text'
            },
          }
        }
      }
    })

    let el = findAllComponents(form, { name: elementName }).at(0)

    expect(el.vm.child$.length).toBe(2)
  })
}

export const children = function (elementType, elementName) {
  it('should have `children` equal to schema object', () => {
    let childrenSchema = {
      child1: {
        type: 'text'
      },
      child2: {
        type: 'text'
      },
    }

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: childrenSchema,
        }
      }
    })

    let el = findAllComponents(form, { name: elementName }).at(0)

    expect(el.vm.children).toStrictEqual(childrenSchema)
  })
}

export const children$ = function (elementType, elementName) {
  it('should have `children$` equal to an object of child element components', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          schema: {
            child1: {
              type: 'text'
            },
            child2: {
              type: 'text'
            },
          },
        }
      }
    })

    let el = findAllComponents(form, { name: elementName }).at(0)

    expect(el.vm.children$.child1.name).toBe('child1')
    expect(el.vm.children$.child2.name).toBe('child2')
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