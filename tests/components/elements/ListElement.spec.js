import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../../../src/utils/testHelpers'

describe('List Element Rendering', () => {
  it('should render initial no. children (single)', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 2,
          element: {
            type: 'text',
          },
        },
      }
    })
  
    let list = form.findComponent({ name: 'ListElement' })

    expect(form.findAllComponents({ name: 'TextElement' }).length).toBe(2)

    expect(_.keys(list.vm.children$)).toStrictEqual(['0', '1'])

    done()
  })

  it('should render initial no. children (object)', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 2,
          object: {
            schema: {
              a: {
                type: 'text',
              },
              b: {
                type: 'text',
              },
            }
          },
        },
      }
    })
  
    let list = form.findComponent({ name: 'ListElement' })

    expect(form.findAllComponents({ name: 'TextElement' }).length).toBe(4)

    expect(_.keys(list.vm.children$)).toStrictEqual(['0', '1'])

    done()
  })
})

describe('List Element Computed', () => {
  it('should return `data` of its children (object)', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 2,
          object: {
            schema: {
              a: {
                type: 'text',
                default: 1,
              },
              b: {
                type: 'text',
                default: 2,
              },
            }
          },
        },
      }
    })
  
    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.data).toStrictEqual({
      a: [
        {
          a: 1,
          b: 2,
        },
        {
          a: 1,
          b: 2,
        },
      ]
    })
    
    done()
  })

  it('should return `data` of its children (single)', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 2,
          element: {
            type: 'text',
            default: 1,
          },
        },
      }
    })
  
    let list = form.findComponent({ name: 'ListElement' })

    let el0 = form.findAllComponents({ name: 'TextElement' }).at(0)
    let el1 = form.findAllComponents({ name: 'TextElement' }).at(1)

    el0.get('input').setValue('aaa')
    el1.get('input').setValue('bbb')

    expect(list.vm.data).toStrictEqual({
      a: [
        'aaa', 'bbb'
      ]
    })
    
    done()
  })

  it('should return `filtered` of its children (single)', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 2,
          element: {
            type: 'text',
            default: 1,
            conditions: [
              ['b', 'bbb']
            ]
          },
        },
        b: {
          type: 'text'
        }
      }
    })
  
    let list = form.findComponent({ name: 'ListElement' })

    let el0 = form.findAllComponents({ name: 'TextElement' }).at(0)
    let el1 = form.findAllComponents({ name: 'TextElement' }).at(1)

    el0.get('input').setValue('aaa')
    el1.get('input').setValue('bbb')

    expect(list.vm.filtered).toStrictEqual({
      a: []
    })
    
    done()
  })

  it('should return `filtered` of its children (object)', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 2,
          object: {
            schema: {
              a: {
                type: 'text',
                default: 1,
              },
              b: {
                type: 'text',
                default: 2,
                conditions: [
                  ['a.*.a', 'aaa']
                ]
              },
            }
          },
        },
      }
    })
  
    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.filtered).toStrictEqual({
      a: [
        {
          a: 1,
        },
        {
          a: 1,
        },
      ]
    })
    
    done()
  })

  it('should return `filtered` without any data if conditions aren\'t met', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 2,
          element: {
            type: 'text',
            default: 1,
          },
          conditions: [
            ['b', 'bbb']
          ]
        },
        b: {
          type: 'text'
        }
      }
    })
  
    let list = form.findComponent({ name: 'ListElement' })

    let el0 = form.findAllComponents({ name: 'TextElement' }).at(0)
    let el1 = form.findAllComponents({ name: 'TextElement' }).at(1)

    el0.get('input').setValue('aaa')
    el1.get('input').setValue('bbb')

    expect(list.vm.filtered).toStrictEqual({})
    
    done()
  })

  it('should add sortable class when `sort` is `true`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 2,
          sort: true,
          element: {
            type: 'text',
            default: 1,
          },
        },
      }
    })
  
    let list = form.findComponent({ name: 'ListElement' })

    let sortableClass = form.vm.selectedTheme.elements.ListElement.data().defaultClasses.sortable

    expect(list.get('.' + list.vm.defaultClasses[list.vm.mainClass]).classes()).toContain(sortableClass)
    
    done()
  })

  it('should set class in `classes`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 2,
          element: {
            type: 'text',
            default: 1,
          },
        },
      }
    })
  
    let list = form.findComponent({ name: 'ListElement' })

    list.vm.classes = {
      ListElement: {
        [list.vm.mainClass]: 'asdf'
      }
    }

    LocalVue.nextTick(() => {
      expect(list.get('.asdf').classes()).toContain('asdf')
      
      done()
    })
  })

  it('should set default values', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          default: ['a', 'b'],
          element: {
            type: 'text',
            default: 1,
          },
        },
      }
    })

    expect(form.findAllComponents({ name: 'TextElement' }).length).toBe(2)
    expect(form.vm.data).toStrictEqual({a: ['a', 'b']})

    done()
  })

  it('should set `initial` value in schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          element: {
            type: 'text',
            default: 1,
          },
        },
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    list.vm.initial = 2

    expect(list.vm.schema.initial).toBe(2)

    done()
  })

  it('should set `sort` value in schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          element: {
            type: 'text',
            default: 1,
          },
        },
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    list.vm.sort = true

    expect(list.vm.schema.sort).toBe(true)

    done()
  })

  it('should return and set `storeOrder`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          storeOrder: 'a',
          element: {
            type: 'text',
            default: 1,
          },
        },
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.storeOrder).toBe('a')

    list.vm.storeOrder = 'b'

    expect(list.vm.schema.storeOrder).toBe('b')

    done()
  })

  it('should not order elements when loaded', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          object: {
            schema: {
              a: {
                type: 'text',
              },
              b: {
                type: 'text',
              }
            }
          },
        },
      }
    })

    form.vm.load({
      a: [
        {
          a: 3,
          b: 4,
        },
        {
          a: 1,
          b: 2,
        },
      ]
    })

    LocalVue.nextTick(() => {
      let el0 = form.findAllComponents({ name: 'TextElement' }).at(0)
      let el1 = form.findAllComponents({ name: 'TextElement' }).at(1)
      let el2 = form.findAllComponents({ name: 'TextElement' }).at(2)
      let el3 = form.findAllComponents({ name: 'TextElement' }).at(3)

      expect(el0.vm.value).toBe(3)
      expect(el1.vm.value).toBe(4)
      expect(el2.vm.value).toBe(1)
      expect(el3.vm.value).toBe(2)

      done()
    })
  })

  it('should should order elements based on `storeOrder` when loaded', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          storeOrder: 'a',
          object: {
            schema: {
              a: {
                type: 'text',
              },
              b: {
                type: 'text',
              }
            }
          },
        },
      }
    })

    form.vm.load({
      a: [
        {
          a: 3,
          b: 4,
        },
        {
          a: 1,
          b: 2,
        },
      ]
    })

    LocalVue.nextTick(() => {
      let el0 = form.findAllComponents({ name: 'TextElement' }).at(0)
      let el1 = form.findAllComponents({ name: 'TextElement' }).at(1)
      let el2 = form.findAllComponents({ name: 'TextElement' }).at(2)
      let el3 = form.findAllComponents({ name: 'TextElement' }).at(3)

      expect(el0.vm.value).toBe(1)
      expect(el1.vm.value).toBe(2)
      expect(el2.vm.value).toBe(3)
      expect(el3.vm.value).toBe(4)

      done()
    })
  })

  it('should should order elements based on `orderBy` when loaded', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          storeOrder: 'a',
          orderBy: 'b',
          object: {
            schema: {
              a: {
                type: 'text',
              },
              b: {
                type: 'text',
              }
            }
          },
        },
      }
    })

    form.vm.load({
      a: [
        {
          a: 3,
          b: 1,
        },
        {
          a: 2,
          b: 4,
        },
      ]
    })

    LocalVue.nextTick(() => {
      let el0 = form.findAllComponents({ name: 'TextElement' }).at(0)
      let el1 = form.findAllComponents({ name: 'TextElement' }).at(1)
      let el2 = form.findAllComponents({ name: 'TextElement' }).at(2)
      let el3 = form.findAllComponents({ name: 'TextElement' }).at(3)

      expect(el0.vm.value).toBe(3)
      expect(el1.vm.value).toBe(1)
      expect(el2.vm.value).toBe(2)
      expect(el3.vm.value).toBe(4)

      done()
    })
  })

  it('should not order elements when `order` is defined and loaded', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          order: 'ASC',
          object: {
            schema: {
              a: {
                type: 'text',
              },
              b: {
                type: 'text',
              }
            }
          },
        },
      }
    })

    form.vm.load({
      a: [
        {
          a: 3,
          b: 4,
        },
        {
          a: 1,
          b: 2,
        },
      ]
    })

    LocalVue.nextTick(() => {
      let el0 = form.findAllComponents({ name: 'TextElement' }).at(0)
      let el1 = form.findAllComponents({ name: 'TextElement' }).at(1)
      let el2 = form.findAllComponents({ name: 'TextElement' }).at(2)
      let el3 = form.findAllComponents({ name: 'TextElement' }).at(3)

      expect(el0.vm.value).toBe(3)
      expect(el1.vm.value).toBe(4)
      expect(el2.vm.value).toBe(1)
      expect(el3.vm.value).toBe(2)

      done()
    })
  })

  it('should order elements DESC when `storeOrder` and `order` is defined and loaded', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          storeOrder: 'a',
          order: 'DESC',
          object: {
            schema: {
              a: {
                type: 'text',
              },
              b: {
                type: 'text',
              }
            }
          },
        },
      }
    })

    form.vm.load({
      a: [
        {
          a: 3,
          b: 4,
        },
        {
          a: 1,
          b: 2,
        },
      ]
    })

    LocalVue.nextTick(() => {
      let el0 = form.findAllComponents({ name: 'TextElement' }).at(0)
      let el1 = form.findAllComponents({ name: 'TextElement' }).at(1)
      let el2 = form.findAllComponents({ name: 'TextElement' }).at(2)
      let el3 = form.findAllComponents({ name: 'TextElement' }).at(3)

      expect(el0.vm.value).toBe(3)
      expect(el1.vm.value).toBe(4)
      expect(el2.vm.value).toBe(1)
      expect(el3.vm.value).toBe(2)

      done()
    })
  })

  it('should order elements DESC when `orderBy` and `order` is defined and loaded', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          storeOrder: 'a',
          orderBy: 'b',
          order: 'DESC',
          object: {
            schema: {
              a: {
                type: 'text',
              },
              b: {
                type: 'text',
              }
            }
          },
        },
      }
    })

    form.vm.load({
      a: [
        {
          a: 3,
          b: 1,
        },
        {
          a: 2,
          b: 4,
        },
      ]
    })

    LocalVue.nextTick(() => {
      let el0 = form.findAllComponents({ name: 'TextElement' }).at(0)
      let el1 = form.findAllComponents({ name: 'TextElement' }).at(1)
      let el2 = form.findAllComponents({ name: 'TextElement' }).at(2)
      let el3 = form.findAllComponents({ name: 'TextElement' }).at(3)

      expect(el0.vm.value).toBe(2)
      expect(el1.vm.value).toBe(4)
      expect(el2.vm.value).toBe(3)
      expect(el3.vm.value).toBe(1)

      done()
    })
  })

  it('should set `order`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          object: {
            schema: {
              a: {
                type: 'text',
              },
              b: {
                type: 'text',
              }
            }
          },
        },
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.order).toBe('ASC')

    list.vm.order = 'DESC'

    expect(list.vm.schema.order).toBe('DESC')
    expect(list.vm.order).toBe('DESC')

    done()
  })

  it('should set `orderBy`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          object: {
            schema: {
              a: {
                type: 'text',
              },
              b: {
                type: 'text',
              }
            }
          },
        },
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.orderBy).toBe(null)

    list.vm.orderBy = 'a'

    expect(list.vm.schema.orderBy).toBe('a')
    expect(list.vm.orderBy).toBe('a')

    done()
  })

  it('should return `true` for `isArrayType`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          object: {
            schema: {
              a: {
                type: 'text',
              },
              b: {
                type: 'text',
              }
            }
          },
        },
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.isArrayType).toBe(true)

    done()
  })
})

describe('List Element Methods', () => {
  it('should `load` in reversed order', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          order: 'DESC',
          element: {
            type: 'text',
          }
        },
      }
    })

    form.vm.load({
      a: [
        1,2,3,4
      ]
    })

    LocalVue.nextTick(() => {
      let el0 = form.findAllComponents({ name: 'TextElement' }).at(0)
      let el1 = form.findAllComponents({ name: 'TextElement' }).at(1)
      let el2 = form.findAllComponents({ name: 'TextElement' }).at(2)
      let el3 = form.findAllComponents({ name: 'TextElement' }).at(3)

      expect(el0.vm.value).toBe(4)
      expect(el1.vm.value).toBe(3)
      expect(el2.vm.value).toBe(2)
      expect(el3.vm.value).toBe(1)

      done()
    })
  })

  it('should `reset` to initial state', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 2,
          element: {
            type: 'text',
          }
        },
      }
    })

    form.vm.load({
      a: [
        1,2,3,4
      ]
    })

    LocalVue.nextTick(() => {
      expect(form.findAllComponents({ name: 'TextElement' }).length).toBe(4)

      form.findComponent({ name: 'ListElement' }).vm.reset()

      LocalVue.nextTick(() => {
      LocalVue.nextTick(() => {
        expect(form.findAllComponents({ name: 'TextElement' }).length).toBe(2)

        done()
      })
      })
    })
  })

  it('should not `reset` if disabled', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 2,
          element: {
            type: 'text',
          }
        },
      }
    })

    form.vm.load({
      a: [
        1,2,3,4
      ]
    })

    let list = form.findComponent({ name: 'ListElement' })

    LocalVue.nextTick(() => {
      expect(form.findAllComponents({ name: 'TextElement' }).length).toBe(4)

      list.vm.disable()
      list.vm.reset()

      LocalVue.nextTick(() => {
      LocalVue.nextTick(() => {
        expect(form.findAllComponents({ name: 'TextElement' }).length).toBe(4)

        done()
      })
      })
    })
  })

  it('should `add` single element with data', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          element: {
            type: 'text',
          }
        },
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    list.vm.add('aa')

    LocalVue.nextTick(() => {
      expect(form.findAllComponents({ name: 'TextElement' }).length).toBe(2)

      let el1 = form.findAllComponents({ name: 'TextElement' }).at(1)

      expect(el1.vm.value).toBe('aa')
      done()
    })
  })

  it('should `add` single element without data', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          element: {
            type: 'text',
          }
        },
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    list.vm.add()

    LocalVue.nextTick(() => {
      expect(form.findAllComponents({ name: 'TextElement' }).length).toBe(2)

      let el1 = form.findAllComponents({ name: 'TextElement' }).at(1)

      expect(el1.vm.value).toBe(el1.vm.null)
      done()
    })
  })

  it('should `add` object element with data', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          object: {
            schema: {
              a: {
                type: 'text'
              },
              b: {
                type: 'text'
              },
            }
          }
        },
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.add({
      a: 1,
      b: 2,
    })).toBe(1) // index of new item

    LocalVue.nextTick(() => {
      expect(form.findAllComponents({ name: 'TextElement' }).length).toBe(4)

      let el2 = form.findAllComponents({ name: 'TextElement' }).at(2)
      let el3 = form.findAllComponents({ name: 'TextElement' }).at(3)

      expect(el2.vm.value).toBe(1)
      expect(el3.vm.value).toBe(2)
      done()
    })
  })

  it('should `add` object element without data', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          object: {
            schema: {
              a: {
                type: 'text'
              },
              b: {
                type: 'text'
              },
            }
          }
        },
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.add()).toBe(1) // index of new item

    LocalVue.nextTick(() => {
      expect(form.findAllComponents({ name: 'TextElement' }).length).toBe(4)

      let el2 = form.findAllComponents({ name: 'TextElement' }).at(2)
      let el3 = form.findAllComponents({ name: 'TextElement' }).at(3)

      expect(el2.vm.value).toBe(el2.vm.null)
      expect(el3.vm.value).toBe(el2.vm.null)

      expect(_.keys(list.vm.children$)).toStrictEqual(['0','1'])
      done()
    })
  })

  it('should not `add` if disabled', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          object: {
            schema: {
              a: {
                type: 'text'
              },
              b: {
                type: 'text'
              },
            }
          }
        },
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    list.vm.disable()
    list.vm.add()

    LocalVue.nextTick(() => {
      expect(form.findAllComponents({ name: 'TextElement' }).length).toBe(2)

      expect(_.keys(list.vm.children$)).toStrictEqual(['0'])
      done()
    })
  })

  it('should `add` without initial', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 0,
          object: {
            schema: {
              a: {
                type: 'text'
              },
              b: {
                type: 'text'
              },
            }
          }
        },
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    list.vm.add()

    LocalVue.nextTick(() => {
      expect(form.findAllComponents({ name: 'TextElement' }).length).toBe(2)

      expect(_.keys(list.vm.children$)).toStrictEqual(['0'])
      done()
    })
  })

  it('should `add` with setting order', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          storeOrder: 'a',
          object: {
            schema: {
              a: {
                type: 'text'
              },
              b: {
                type: 'text'
              },
            }
          }
        },
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    list.vm.add()

    LocalVue.nextTick(() => {
      expect(form.findAllComponents({ name: 'TextElement' }).length).toBe(4)

      let el0 = form.findAllComponents({ name: 'TextElement' }).at(0)
      let el1 = form.findAllComponents({ name: 'TextElement' }).at(1)
      let el2 = form.findAllComponents({ name: 'TextElement' }).at(2)
      let el3 = form.findAllComponents({ name: 'TextElement' }).at(3)

      expect(el0.vm.value).toBe(1)
      expect(el1.vm.value).toBe(el3.vm.null)
      expect(el2.vm.value).toBe(2)
      expect(el3.vm.value).toBe(el3.vm.null)

      expect(_.keys(list.vm.children$)).toStrictEqual(['0', '1'])
      done()
    })
  })

  it('should `remove`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          default: [
            {
              a: 1,
              b: 2
            },
            {
              a: 3,
              b: 4
            },
            {
              a: 5,
              b: 6
            },
          ],
          object: {
            schema: {
              a: {
                type: 'text'
              },
              b: {
                type: 'text'
              },
            }
          }
        },
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    list.vm.remove(1)

    LocalVue.nextTick(() => {
      let el0 = form.findAllComponents({ name: 'TextElement' }).at(0)
      let el1 = form.findAllComponents({ name: 'TextElement' }).at(1)
      let el2 = form.findAllComponents({ name: 'TextElement' }).at(2)
      let el3 = form.findAllComponents({ name: 'TextElement' }).at(3)

      expect(el0.vm.value).toBe(1)
      expect(el1.vm.value).toBe(2)
      expect(el2.vm.value).toBe(5)
      expect(el3.vm.value).toBe(6)

      expect(_.keys(list.vm.children$)).toStrictEqual(['0','1'])
      done()
    })
  })

  it('should not `remove` if disabled', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          default: [
            {
              a: 1,
              b: 2
            },
            {
              a: 3,
              b: 4
            },
            {
              a: 5,
              b: 6
            },
          ],
          object: {
            schema: {
              a: {
                type: 'text'
              },
              b: {
                type: 'text'
              },
            }
          }
        },
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    list.vm.disable()
    list.vm.remove(1)

    LocalVue.nextTick(() => {
      let el0 = form.findAllComponents({ name: 'TextElement' }).at(0)
      let el1 = form.findAllComponents({ name: 'TextElement' }).at(1)
      let el2 = form.findAllComponents({ name: 'TextElement' }).at(2)
      let el3 = form.findAllComponents({ name: 'TextElement' }).at(3)
      let el4 = form.findAllComponents({ name: 'TextElement' }).at(4)
      let el5 = form.findAllComponents({ name: 'TextElement' }).at(5)

      expect(el0.vm.value).toBe(1)
      expect(el1.vm.value).toBe(2)
      expect(el2.vm.value).toBe(3)
      expect(el3.vm.value).toBe(4)
      expect(el4.vm.value).toBe(5)
      expect(el5.vm.value).toBe(6)

      expect(_.keys(list.vm.children$)).toStrictEqual(['0','1','2'])
      done()
    })
  })

  it('should `remove` with refreshing orfer', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          storeOrder: 'a',
          default: [
            {
              b: 2
            },
            {
              b: 4
            },
            {
              b: 6
            },
          ],
          object: {
            schema: {
              a: {
                type: 'text'
              },
              b: {
                type: 'text'
              },
            }
          }
        },
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    let el0 = form.findAllComponents({ name: 'TextElement' }).at(0)
    let el1 = form.findAllComponents({ name: 'TextElement' }).at(1)
    let el2 = form.findAllComponents({ name: 'TextElement' }).at(2)
    let el3 = form.findAllComponents({ name: 'TextElement' }).at(3)
    let el4 = form.findAllComponents({ name: 'TextElement' }).at(4)
    let el5 = form.findAllComponents({ name: 'TextElement' }).at(5)

    expect(el0.vm.value).toBe(1)
    expect(el1.vm.value).toBe(2)
    expect(el2.vm.value).toBe(2)
    expect(el3.vm.value).toBe(4)
    expect(el4.vm.value).toBe(3)
    expect(el5.vm.value).toBe(6)

    list.vm.remove(1)

    LocalVue.nextTick(() => {
      let el0 = form.findAllComponents({ name: 'TextElement' }).at(0)
      let el1 = form.findAllComponents({ name: 'TextElement' }).at(1)
      let el2 = form.findAllComponents({ name: 'TextElement' }).at(2)
      let el3 = form.findAllComponents({ name: 'TextElement' }).at(3)

      expect(el0.vm.value).toBe(1)
      expect(el1.vm.value).toBe(2)
      expect(el2.vm.value).toBe(2)
      expect(el3.vm.value).toBe(6)

      expect(_.keys(list.vm.children$)).toStrictEqual(['0','1'])
      done()
    })
  })

  it('should sort items while refreshing order', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          storeOrder: 'a',
          default: [
            {
              b: 2
            },
            {
              b: 4
            },
            {
              b: 6
            },
          ],
          object: {
            schema: {
              a: {
                type: 'text'
              },
              b: {
                type: 'text'
              },
            }
          }
        },
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    let el0 = form.findAllComponents({ name: 'TextElement' }).at(0)
    let el1 = form.findAllComponents({ name: 'TextElement' }).at(1)
    let el2 = form.findAllComponents({ name: 'TextElement' }).at(2)
    let el3 = form.findAllComponents({ name: 'TextElement' }).at(3)
    let el4 = form.findAllComponents({ name: 'TextElement' }).at(4)
    let el5 = form.findAllComponents({ name: 'TextElement' }).at(5)

    expect(el0.vm.value).toBe(1)
    expect(el1.vm.value).toBe(2)
    expect(el2.vm.value).toBe(2)
    expect(el3.vm.value).toBe(4)
    expect(el4.vm.value).toBe(3)
    expect(el5.vm.value).toBe(6)

    list.vm.handleSort({
      oldIndex: 2,
      newIndex: 0
    })

    LocalVue.nextTick(() => {
      let el0 = form.findAllComponents({ name: 'TextElement' }).at(0)
      let el1 = form.findAllComponents({ name: 'TextElement' }).at(1)
      let el2 = form.findAllComponents({ name: 'TextElement' }).at(2)
      let el3 = form.findAllComponents({ name: 'TextElement' }).at(3)
      let el4 = form.findAllComponents({ name: 'TextElement' }).at(4)
      let el5 = form.findAllComponents({ name: 'TextElement' }).at(5)

      expect(el0.vm.value).toBe(1)
      expect(el1.vm.value).toBe(6)
      expect(el2.vm.value).toBe(2)
      expect(el3.vm.value).toBe(2)
      expect(el4.vm.value).toBe(3)
      expect(el5.vm.value).toBe(4)

      expect(_.keys(list.vm.children$)).toStrictEqual(['0','1','2'])
      done()
    })
  })

  it('should not sort items if disabled', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          storeOrder: 'a',
          default: [
            {
              b: 2
            },
            {
              b: 4
            },
            {
              b: 6
            },
          ],
          object: {
            schema: {
              a: {
                type: 'text'
              },
              b: {
                type: 'text'
              },
            }
          }
        },
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    let el0 = form.findAllComponents({ name: 'TextElement' }).at(0)
    let el1 = form.findAllComponents({ name: 'TextElement' }).at(1)
    let el2 = form.findAllComponents({ name: 'TextElement' }).at(2)
    let el3 = form.findAllComponents({ name: 'TextElement' }).at(3)
    let el4 = form.findAllComponents({ name: 'TextElement' }).at(4)
    let el5 = form.findAllComponents({ name: 'TextElement' }).at(5)

    expect(el0.vm.value).toBe(1)
    expect(el1.vm.value).toBe(2)
    expect(el2.vm.value).toBe(2)
    expect(el3.vm.value).toBe(4)
    expect(el4.vm.value).toBe(3)
    expect(el5.vm.value).toBe(6)

    list.vm.disable()
    list.vm.handleSort({
      oldIndex: 2,
      newIndex: 0
    })

    LocalVue.nextTick(() => {
      let el0 = form.findAllComponents({ name: 'TextElement' }).at(0)
      let el1 = form.findAllComponents({ name: 'TextElement' }).at(1)
      let el2 = form.findAllComponents({ name: 'TextElement' }).at(2)
      let el3 = form.findAllComponents({ name: 'TextElement' }).at(3)
      let el4 = form.findAllComponents({ name: 'TextElement' }).at(4)
      let el5 = form.findAllComponents({ name: 'TextElement' }).at(5)

      expect(el0.vm.value).toBe(1)
      expect(el1.vm.value).toBe(2)
      expect(el2.vm.value).toBe(2)
      expect(el3.vm.value).toBe(4)
      expect(el4.vm.value).toBe(3)
      expect(el5.vm.value).toBe(6)
      
      expect(_.keys(list.vm.children$)).toStrictEqual(['0','1','2'])
      done()
    })
  })
})

describe('List Element Events', () => {
  it('should trigger `change` on add', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let changeMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          element: {
            type: 'text'
          },
          onChange: changeMock,
        }
      }
    })

    expect(changeMock.mock.calls.length).toBe(0)

    let list = form.findComponent({ name: 'ListElement' })

    list.vm.add('asdf')

    LocalVue.nextTick(() => {
      expect(changeMock.mock.calls.length).toBe(1)

      expect(changeMock.mock.calls[0][0]).toStrictEqual([null])
      expect(changeMock.mock.calls[0][1]).toStrictEqual([null, 'asdf'])
      expect(changeMock.mock.calls[0][2]).toStrictEqual('add')
      done()
    })
  })

  it('should trigger `change` on remove', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let changeMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          default: [
            1,2,3
          ],
          element: {
            type: 'text'
          },
          onChange: changeMock,
        }
      }
    })

    expect(changeMock.mock.calls.length).toBe(0)

    let list = form.findComponent({ name: 'ListElement' })

    list.vm.remove(1)

    LocalVue.nextTick(() => {
      expect(changeMock.mock.calls.length).toBe(1)

      expect(changeMock.mock.calls[0][0]).toStrictEqual([1,2,3])
      expect(changeMock.mock.calls[0][1]).toStrictEqual([1,3])
      expect(changeMock.mock.calls[0][2]).toStrictEqual('remove')
      done()
    })
  })

  it('should trigger `change` on remove', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let changeMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          sort: true,
          default: [
            1,2,3
          ],
          element: {
            type: 'text'
          },
          onChange: changeMock,
        }
      }
    })

    expect(changeMock.mock.calls.length).toBe(0)

    let list = form.findComponent({ name: 'ListElement' })

    list.vm.handleSort({
      oldIndex: 2,
      newIndex: 0
    })

    LocalVue.nextTick(() => {
      expect(changeMock.mock.calls.length).toBe(1)

      expect(changeMock.mock.calls[0][0]).toStrictEqual([1,2,3])
      expect(changeMock.mock.calls[0][1]).toStrictEqual([3,1,2])
      expect(changeMock.mock.calls[0][2]).toStrictEqual('sort')
      done()
    })
  })

  it('should trigger element\'s validation on change', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          rules: 'required',
          element: {
            type: 'text'
          },
        }
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.validated).toBe(false)

    list.vm.add('asdf')

    LocalVue.nextTick(() => {
    LocalVue.nextTick(() => {
      expect(list.vm.validated).toBe(true)
      done()
    })
    })
  })

  it('should not trigger element\'s validation if `change` event returns `false`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          rules: 'required',
          element: {
            type: 'text'
          },
          onChange() {
            return false
          }
        }
      }
    })

    let list = form.findComponent({ name: 'ListElement' })

    expect(list.vm.validated).toBe(false)

    list.vm.add('asdf')

    LocalVue.nextTick(() => {
    LocalVue.nextTick(() => {
      expect(list.vm.validated).toBe(false)
      done()
    })
    })
  })

  it('should trigger `add` on add', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let addMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          initial: 1,
          element: {
            type: 'text'
          },
          onAdd: addMock,
        }
      }
    })

    expect(addMock.mock.calls.length).toBe(0)

    let list = form.findComponent({ name: 'ListElement' })

    list.vm.add()

    LocalVue.nextTick(() => {
      expect(addMock.mock.calls.length).toBe(1)

      expect(addMock.mock.calls[0][0].name).toBe(1)
      expect(addMock.mock.calls[0][1]).toBe(1)
      done()
    })
  })

  it('should trigger `remove` on remove', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let removeMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          default: [
            1,2,3
          ],
          element: {
            type: 'text'
          },
          onRemove: removeMock,
        }
      }
    })

    expect(removeMock.mock.calls.length).toBe(0)

    let list = form.findComponent({ name: 'ListElement' })

    list.vm.remove(1)

    LocalVue.nextTick(() => {
      expect(removeMock.mock.calls.length).toBe(1)

      expect(removeMock.mock.calls[0][0]).toBe(1)
      done()
    })
  })

  it('should trigger `sort` on sort', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let sortMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          default: [
            1,2,3
          ],
          element: {
            type: 'text'
          },
          onSort: sortMock,
        }
      }
    })

    expect(sortMock.mock.calls.length).toBe(0)

    let list = form.findComponent({ name: 'ListElement' })

    list.vm.handleSort({
      oldIndex: 2,
      newIndex: 0
    })

    LocalVue.nextTick(() => {
      expect(sortMock.mock.calls.length).toBe(1)

      expect(sortMock.mock.calls[0][0].oldIndex).toBe(2)
      expect(sortMock.mock.calls[0][0].newIndex).toBe(0)
      done()
    })
  })
})

describe('List Element Dynamics', () => {
  it('should update prototype (element)', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          element: {
            type: 'text'
          }
        }
      }
    })

    let el0 = form.findComponent({ name: 'TextElement' })

    el0.get('input').setValue('aaa')

    expect(el0.vm.value).toBe('aaa')
    expect(el0.vm.label).toBe(null)

    form.setData({
      schema: {
        a: {
          element: {
            label: 'aaa'
          }
        }
      }
    })

    LocalVue.nextTick(() => {
      expect(el0.vm.value).toBe('aaa')
      expect(el0.vm.label).toBe('aaa')

      done()
    })
  })

  it('should update prototype (object)', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'list',
          object: {
            schema: {
              a: {
                type: 'text'
              }
            }
          }
        }
      }
    })

    let el0 = form.findAllComponents({ name: 'TextElement' }).at(0)

    el0.get('input').setValue('aaa')

    expect(el0.vm.value).toBe('aaa')
    expect(el0.vm.label).toBe(null)

    form.setData({
      schema: {
        a: {
          object: {
            schema: {
              a: {
                label: 'aaa',
              },
              b: {
                type: 'text',
                label: 'bbb'
              }
            }
          }
        }
      }
    })

    LocalVue.nextTick(() => {
      let el1 = form.findAllComponents({ name: 'TextElement' }).at(1)
      
      expect(el0.vm.value).toBe('aaa')
      expect(el0.vm.label).toBe('aaa')
      
      expect(el1.vm.value).toBe(el1.vm.null)
      expect(el1.vm.label).toBe('bbb')

      done()
    })
  })
})