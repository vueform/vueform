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

  it('should add new child to `children$`', async () => {
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

    el.vm.children.child3 = {
      type: 'text'
    }

    await nextTick()

    expect(el.vm.children$.child1.name).toBe('child1')
    expect(el.vm.children$.child2.name).toBe('child2')
    expect(el.vm.children$.child3.name).toBe('child3')
  })

  it('should reorder `children$`', async () => {
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

    el.vm.children = {
      child2: {
        type: 'text'
      },
      child1: {
        type: 'text'
      },
    }

    await nextTick()

    let children$Keys = _.keys(el.vm.children$)

    expect(children$Keys[0]).toBe('child2')
    expect(children$Keys[1]).toBe('child1')
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