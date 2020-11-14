import { createLocalVue } from '@vue/test-utils'
import { createForm, findAllComponents } from 'test-helpers'

describe('Object Element', () => {
  it('should render children', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'object',
          schema: {
            b: {
              type: 'text',
              label: 'B element'
            },
            c: {
              type: 'text',
              label: 'C element'
            },
          }
        }
      }
    })

    expect(form.findComponent({ name: 'ObjectElement' }).html()).toContain('B element')
    expect(form.findComponent({ name: 'ObjectElement' }).html()).toContain('C element')
    
    done()
  })

  it('should set children$', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'object',
          schema: {
            b: {
              type: 'text',
              label: 'B element'
            },
            c: {
              type: 'text',
              label: 'C element'
            },
          }
        }
      }
    })

    LocalVue.nextTick(() => {
      expect(_.keys(form.findComponent({ name: 'ObjectElement' }).vm.children$)).toStrictEqual(['b', 'c'])

      done()
    })
  })

  it('should set default values for children$', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'object',
          default: {
            b: 1,
            c: 2
          },
          schema: {
            b: {
              type: 'text',
              label: 'B element'
            },
            c: {
              type: 'text',
              label: 'C element'
            },
          }
        }
      }
    })

    LocalVue.nextTick(() => {
      expect(form.vm.data).toStrictEqual({
        a: {
          b: 1,
          c: 2
        }
      })

      done()
    })
  })

  it('should not display children errors', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'object',
          schema: {
            b: {
              type: 'text',
              label: 'B element',
              rules: 'required'
            },
            c: {
              type: 'text',
              label: 'C element'
            },
          }
        }
      }
    })

    let b = findAllComponents(form, { name: 'TextElement' }).at(0)

    b.vm.validate()

    LocalVue.nextTick(() => {
      expect(form.vm.errors.length).toBe(1)
      expect(form.findComponent({ name: 'ObjectElement' }).vm.error).toBe(null)

      done()
    })
  })
})

describe('Object Element Dynamics', () => {
  it('should add child', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'object',
          schema: {
            b: {
              type: 'text',
              label: 'B element',
            },
            c: {
              type: 'text',
              label: 'C element',
            },
          },
        },
      }
    })

    let object = form.findComponent({ name: 'ObjectElement' })

    form.setData({
      schema: {
        a: {
          schema: {
            d: {
              type: 'text'
            }
          }
        }
      }
    })

    LocalVue.nextTick(() => {
      let d = findAllComponents(form, { name: 'TextElement' }).at(2)
      expect(d.vm.name).toBe('d')

      LocalVue.nextTick(() => {
        expect(object.vm.children$.d).toBeTruthy()

        done()
      })
    })
  })

  it('should remove child', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'object',
          schema: {
            b: {
              type: 'text',
              label: 'B element',
            },
            c: {
              type: 'text',
              label: 'C element',
            },
          },
        },
      }
    })

    let object = form.findComponent({ name: 'ObjectElement' })
    let c = findAllComponents(form, { name: 'TextElement' }).at(1)
    expect(c.vm.name).toBe('c')

    form.vm.$delete(form.vm.schema.a.schema, 'c')

    LocalVue.nextTick(() => {
    LocalVue.nextTick(() => {
      expect(findAllComponents(form, { name: 'TextElement' }).length).toBe(1)
      expect(object.vm.children$.c).toBeFalsy()

      done()
    })
    })
  })
})