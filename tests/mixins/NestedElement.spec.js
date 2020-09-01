import { createLocalVue, mount } from '@vue/test-utils'
import { createForm, installLaraform } from './../../src/utils/testHelpers'
import { mergeComponentClasses } from './../../src/utils/mergeClasses'
import { Laraform } from './../../src/index'

describe('Nested Element Mixin', () => {
  it('should throw error when `value` is set', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        name: {
          type: 'object',
        }
      }
    })

    let object = form.findAllComponents({ name: 'ObjectElement' }).at(0)

    const originalConsoleError = console.error

    console.error = () => {};

    expect(() => {
      object.vm.value = 'sadf'
    }).toThrowError()
    
    console.error = originalConsoleError

    done()
  })

  it('should return `data` from children', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        name: {
          type: 'object',
          schema: {
            a: {
              type: 'text',
              default: 'aaa'
            },
            b: {
              type: 'text',
              default: 'bbb'
            },
          }
        }
      }
    })

    let object = form.findAllComponents({ name: 'ObjectElement' }).at(0)

    expect(object.vm.data).toStrictEqual({ name: { a: 'aaa', b: 'bbb' } })

    done()
  })

  it('should return `filtered` from children', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        name: {
          type: 'object',
          schema: {
            a: {
              type: 'text',
              default: 'aaa'
            },
            b: {
              type: 'text',
              default: 'bbb',
              conditions: [
                ['name.a', 'aa']
              ]
            },
          }
        }
      }
    })

    let object = form.findAllComponents({ name: 'ObjectElement' }).at(0)
    let a = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(object.vm.filtered).toStrictEqual({ name: { a: 'aaa' } })

    a.get('input').setValue('aa')

    expect(object.vm.filtered).toStrictEqual({ name: { a: 'aa', b: 'bbb' } })

    done()
  })

  it('should return empty `filtered` when not available', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        c: {
          type: 'text',
        },
        name: {
          type: 'object',
          conditions: [
            ['c', 'ccc']
          ],
          schema: {
            a: {
              type: 'text',
              default: 'aaa'
            },
            b: {
              type: 'text',
              default: 'bbb',
            },
          }
        }
      }
    })

    let object = form.findAllComponents({ name: 'ObjectElement' }).at(0)
    let c = form.findAllComponents({ name: 'TextElement' }).at(0)

    expect(object.vm.filtered).toStrictEqual({ })

    c.get('input').setValue('ccc')

    expect(object.vm.filtered).toStrictEqual({ name: { a: 'aaa', b: 'bbb' } })

    done()
  })

  it('should return empty `filtered` when submit is false', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        name: {
          type: 'object',
          schema: {
            a: {
              type: 'text',
              default: 'aaa'
            },
            b: {
              type: 'text',
              default: 'bbb',
              submit: false,
            },
          }
        }
      }
    })

    let object = form.findAllComponents({ name: 'ObjectElement' }).at(0)

    expect(object.vm.filtered).toStrictEqual({ name: { a: 'aaa' } })

    done()
  })

  it('should `load` data to children', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        name: {
          type: 'object',
          schema: {
            a: {
              type: 'text',
            },
            b: {
              type: 'text',
            },
          }
        }
      }
    })

    let object = form.findAllComponents({ name: 'ObjectElement' }).at(0)

    object.vm.load({
      name: {
        a: 'aaa',
        b: 'bbb'
      }
    })

    expect(object.vm.data).toStrictEqual({ name: { a: 'aaa', b: 'bbb' } })

    done()
  })

  it('should not `load` data to children when data key not found', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        name: {
          type: 'object',
          schema: {
            a: {
              type: 'text',
            },
            b: {
              type: 'text',
            },
          }
        }
      }
    })

    let object = form.findAllComponents({ name: 'ObjectElement' }).at(0)

    form.vm.load({
      c: 'ccc'
    })

    expect(object.vm.data).toStrictEqual({ name: { a: null, b: null } })

    done()
  })

  it('should `update` children based on value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        name: {
          type: 'object',
          schema: {
            a: {
              type: 'text',
            },
            b: {
              type: 'text',
            },
          }
        }
      }
    })

    let object = form.findAllComponents({ name: 'ObjectElement' }).at(0)

    object.vm.update({
      a: 'aaa',
      b: 'bbb'
    })

    expect(object.vm.data).toStrictEqual({ name: { a: 'aaa', b: 'bbb' } })

    done()
  })

  it('should `reset` children', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        name: {
          type: 'object',
          schema: {
            a: {
              type: 'text',
              default: 'aaa'
            },
            b: {
              type: 'text',
              default: 'bbb'
            },
          },
        }
      }
    })

    let object = form.findAllComponents({ name: 'ObjectElement' }).at(0)
    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let b = form.findAllComponents({ name: 'TextElement' }).at(1)

    expect(object.vm.data).toStrictEqual({ name: { a: 'aaa', b: 'bbb' } })

    a.vm.update('aa')
    b.vm.update('bb')

    expect(object.vm.data).toStrictEqual({ name: { a: 'aa', b: 'bb' } })

    object.vm.reset()

    expect(object.vm.data).toStrictEqual({ name: { a: 'aaa', b: 'bbb' } })

    done()
  })

  it('should `clear` children', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        name: {
          type: 'object',
          schema: {
            a: {
              type: 'text',
              default: 'aaa'
            },
            b: {
              type: 'text',
              default: 'bbb'
            },
          },
        }
      }
    })

    let object = form.findAllComponents({ name: 'ObjectElement' }).at(0)
    let a = form.findAllComponents({ name: 'TextElement' }).at(0)
    let b = form.findAllComponents({ name: 'TextElement' }).at(1)

    expect(object.vm.data).toStrictEqual({ name: { a: 'aaa', b: 'bbb' } })

    a.vm.update('aa')
    b.vm.update('bb')

    expect(object.vm.data).toStrictEqual({ name: { a: 'aa', b: 'bb' } })

    object.vm.clear()

    expect(object.vm.data).toStrictEqual({ name: { a: null, b: null } })

    done()
  })
})