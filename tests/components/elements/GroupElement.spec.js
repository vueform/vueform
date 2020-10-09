import { createLocalVue } from '@vue/test-utils'
import { createForm } from 'test-helpers'

describe('Group Element Rendering', () => {
  it('should render children', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'group',
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

    expect(form.findComponent({ name: 'GroupElement' }).html()).toContain('B element')
    expect(form.findComponent({ name: 'GroupElement' }).html()).toContain('C element')
    
    done()
  })
})

describe('Group Element Data & Props', () => {
  it('should set children$', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'group',
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
      expect(_.keys(form.findComponent({ name: 'GroupElement' }).vm.children$)).toStrictEqual(['b', 'c'])

      done()
    })
  })
})

describe('Group Element Computed', () => {
  it('should not display children errors', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'group',
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

    let b = form.findAllComponents({ name: 'TextElement' }).at(0)

    b.vm.validate()

    LocalVue.nextTick(() => {
      expect(form.vm.errors.length).toBe(1)
      expect(form.findComponent({ name: 'GroupElement' }).vm.error).toBe(null)

      done()
    })
  })

  it('should throw error when trying to set value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'group',
          schema: {
            b: {
              type: 'text',
              label: 'B element',
            },
            c: {
              type: 'text',
              label: 'C element'
            },
          }
        }
      }
    })

    let group = form.findAllComponents({ name: 'GroupElement' }).at(0)

    const originalConsoleError = console.error

    console.error = () => {}

    expect(() => {
      group.vm.value = '111'
    }).toThrow(Error)
    
    console.error = originalConsoleError

    done()
  })

  it('should return children data in flat structure', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'group',
          schema: {
            b: {
              type: 'text',
              label: 'B element',
            },
            c: {
              type: 'text',
              label: 'C element'
            },
          }
        }
      }
    })

    let b = form.findAllComponents({ name: 'TextElement' }).at(0)
    let c = form.findAllComponents({ name: 'TextElement' }).at(1)

    b.get('input').setValue('bbb')
    c.get('input').setValue('ccc')

    expect(form.findComponent({ name: 'GroupElement' }).vm.data).toStrictEqual({
      b: 'bbb',
      c: 'ccc',
    })

    done()
  })

  it('should return children filtered data', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'group',
          schema: {
            b: {
              type: 'text',
              label: 'B element',
            },
            c: {
              type: 'text',
              label: 'C element',
              conditions: [
                ['b', 'bb']
              ]
            },
          }
        }
      }
    })

    let b = form.findAllComponents({ name: 'TextElement' }).at(0)
    let c = form.findAllComponents({ name: 'TextElement' }).at(1)

    b.get('input').setValue('bbb')
    c.get('input').setValue('ccc')
  
    expect(form.findComponent({ name: 'GroupElement' }).vm.filtered).toStrictEqual({
      b: 'bbb',
    })

    done()
  })

  it('should not include data in filtered if not available', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'group',
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
          conditions: [
            ['d', 'dd']
          ]
        },
        d: {
          type: 'text'
        }
      }
    })

    let b = form.findAllComponents({ name: 'TextElement' }).at(0)
    let c = form.findAllComponents({ name: 'TextElement' }).at(1)

    b.get('input').setValue('bbb')
    c.get('input').setValue('ccc')
  
    expect(form.findComponent({ name: 'GroupElement' }).vm.data).toStrictEqual({
      b: 'bbb',
      c: 'ccc',
    })
    expect(form.findComponent({ name: 'GroupElement' }).vm.filtered).toStrictEqual({})

    done()
  })

  it('should not include data in filtered if `submit` set to false', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'group',
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
          submit: false
        },
      }
    })

    let b = form.findAllComponents({ name: 'TextElement' }).at(0)
    let c = form.findAllComponents({ name: 'TextElement' }).at(1)

    b.get('input').setValue('bbb')
    c.get('input').setValue('ccc')
  
    expect(form.findComponent({ name: 'GroupElement' }).vm.data).toStrictEqual({
      b: 'bbb',
      c: 'ccc',
    })
    expect(form.findComponent({ name: 'GroupElement' }).vm.filtered).toStrictEqual({})

    done()
  })
})

describe('Group Element Methods', () => {
  it('should load data to children', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'group',
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

    let group = form.findComponent({ name: 'GroupElement' })

    group.vm.load({
      b: 'bbb',
      c: 'ccc',
    })

    expect(form.vm.data).toStrictEqual({
      b: 'bbb',
      c: 'ccc',
    })

    done()
  })
})

describe('Group Element Dynamics', () => {
  it('should add child', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'group',
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

    let group = form.findComponent({ name: 'GroupElement' })

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
      let d = form.findAllComponents({ name: 'TextElement' }).at(2)
      expect(d.vm.name).toBe('d')

      LocalVue.nextTick(() => {
        expect(group.vm.children$.d).toBeTruthy()

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
          type: 'group',
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

    let group = form.findComponent({ name: 'GroupElement' })
    let c = form.findAllComponents({ name: 'TextElement' }).at(1)
    expect(c.vm.name).toBe('c')

    form.vm.$delete(form.vm.schema.a.schema, 'c')

    LocalVue.nextTick(() => {
    LocalVue.nextTick(() => {
      expect(form.findAllComponents({ name: 'TextElement' }).length).toBe(1)
      expect(group.vm.children$.c).toBeFalsy()

      done()
    })
    })
  })
})