import { createForm } from 'test-helpers'
import { nextTick } from 'vue'

export const child$ = function (elementType, elementName) {
  it('should have `child$` as an empty array by default', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.child$).toStrictEqual([])
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

    let el = form.vm.el$('el')

    expect(el.child$.length).toBe(2)
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

    let el = form.vm.el$('el')

    expect(el.children).toStrictEqual(childrenSchema)
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

    let el = form.vm.el$('el')

    expect(el.children$.child1.name).toBe('child1')
    expect(el.children$.child2.name).toBe('child2')
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

    let el = form.vm.el$('el')

    el.children.child3 = {
      type: 'text'
    }

    await nextTick()

    expect(el.children$.child1.name).toBe('child1')
    expect(el.children$.child2.name).toBe('child2')
    expect(el.children$.child3.name).toBe('child3')
  })

  it('should remove child from `children$`', async () => {
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

    let el = form.vm.el$('el')

    el.children = {
      child2: {
        type: 'text'
      }
    }

    await nextTick()

    expect(_.keys(el.children$).length).toBe(1)
    expect(el.children$.child2.name).toBe('child2')
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

    let el = form.vm.el$('el')

    el.children = {
      child2: {
        type: 'text'
      },
      child1: {
        type: 'text'
      },
    }

    await nextTick()

    let children$Keys = _.keys(el.children$)

    expect(children$Keys[0]).toBe('child2')
    expect(children$Keys[1]).toBe('child1')
  })
}