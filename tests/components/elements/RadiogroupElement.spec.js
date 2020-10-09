import { createLocalVue, mount } from '@vue/test-utils'
import { createForm, installLaraform, check, uncheck } from 'test-helpers'
import { Laraform } from './../../../src/index'

describe('Radio Element Rendering', () => {
  it('should render radios', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: {
            a: 'aaa',
            b: 'bbb',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    let rg0 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(0)
    let rg1 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(1)

    expect(rg0.exists()).toBe(true)
    expect(rg1.exists()).toBe(true)

    done()
  })
  
  it('should be able to use custom slot for radio', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: {
            a: 'aaa',
            b: 'bbb',
          },
          slots: {
            radio: LocalVue.extend({
              props: ['el$', 'item', 'value'],
              render(h) {
                return h('div', this.item + ' radio')
              }
            })
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    expect(a.html()).toContain('aaa radio')
    expect(a.html()).toContain('bbb radio')

    done()
  })

  it('should be able to use inline slot for radio', () => {
    let { LocalVue } = installLaraform({})

    let component = LocalVue.extend({
      mixins: [Laraform],
      data() {
        return {
          schema: {
            a: {
              type: 'radiogroup',
              items: {
                a: 'aaa',
                b: 'bbb',
              }
            }
          }
        }
      },
      render(h) {
        return h('form', [
          h(this.extendedTheme.elements.RadiogroupElement, {
            props: {
              schema: this.schema.a,
              name: 'a'
            },
            directives: [
              {
                name: 'ref',
                arg: 'elements$'
              }
            ],
            scopedSlots: {
              radio: (props) => {
                return h('div', props.item + ' radio')
              }
            }
          })
        ])
      }
    })

    let form = mount(component, {
      LocalVue,
      mocks: {
        $laraform: {
          config: {},
          services: {
            messageBag: jest.fn()
          }
        }
      }
    })

    let a = form.findAllComponents({name: 'RadiogroupElement'}).at(0)

    expect(a.html()).toContain('aaa radio')
    expect(a.html()).toContain('bbb radio')
  })

  it('should disable radios defined in `disables`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
          disables: ['a', 'c']
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    let rg0 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(0)
    let rg1 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(1)
    let rg2 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(2)

    expect(_.values(rg0.get('input').attributes())).toContain('disabled')
    expect(_.values(rg1.get('input').attributes())).not.toContain('disabled')
    expect(_.values(rg2.get('input').attributes())).toContain('disabled')

    done()
  })

  it('should disable all radios `disabled` is true', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
          disabled: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    let rg0 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(0)
    let rg1 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(1)
    let rg2 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(2)

    expect(_.values(rg0.get('input').attributes())).toContain('disabled')
    expect(_.values(rg1.get('input').attributes())).toContain('disabled')
    expect(_.values(rg2.get('input').attributes())).toContain('disabled')

    done()
  })
})

describe('Radio Element Props', () => {
  it('should have an empty object for `items` by default', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    expect(a.vm.items).toStrictEqual({})

    done()
  })

  it('should set `items` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: {
            a: 'aaa',
            b: 'bbb',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    expect(a.vm.items).toStrictEqual({
      a: 'aaa',
      b: 'bbb'
    })

    done()
  })

  it('should set `items` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    expect(a.vm.items).toStrictEqual({})

    a.vm.items = {
      a: 'aaa',
      b: 'bbb',
    }

    expect(a.vm.items).toStrictEqual({
      a: 'aaa',
      b: 'bbb'
    })

    done()
  })

  it('should have an empty array for `disables` by default', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    expect(a.vm.disables).toStrictEqual([])

    done()
  })

  it('should set `disables` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
          disables: ['a', 'b']
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    expect(a.vm.disables).toStrictEqual(['a', 'b'])

    done()
  })

  it('should set `disables` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    expect(a.vm.disables).toStrictEqual([])

    a.vm.disables = ['a', 'b']

    expect(a.vm.disables).toStrictEqual(['a', 'b'])

    done()
  })

  it('should have false for `disabled` by default', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    expect(a.vm.disabled).toBe(false)

    done()
  })

  it('should set `disabled` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
          disabled: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    expect(a.vm.disabled).toBe(true)

    done()
  })

  it('should set `disabled` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    expect(a.vm.disabled).toBe(false)

    a.vm.disabled = true

    expect(a.vm.disabled).toBe(true)

    done()
  })
})

describe('Radio Element Methods', () => {
  it('should `disableAll`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    let rg0 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(0)
    let rg1 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(1)
    let rg2 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(2)

    expect(_.values(rg0.get('input').attributes())).not.toContain('disabled')
    expect(_.values(rg1.get('input').attributes())).not.toContain('disabled')
    expect(_.values(rg2.get('input').attributes())).not.toContain('disabled')

    a.vm.disableAll()

    LocalVue.nextTick(() => {
      expect(_.values(rg0.get('input').attributes())).toContain('disabled')
      expect(_.values(rg1.get('input').attributes())).toContain('disabled')
      expect(_.values(rg2.get('input').attributes())).toContain('disabled')

      done()
    })
  })

  it('should `enableAll`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    let rg0 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(0)
    let rg1 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(1)
    let rg2 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(2)

    expect(_.values(rg0.get('input').attributes())).not.toContain('disabled')
    expect(_.values(rg1.get('input').attributes())).not.toContain('disabled')
    expect(_.values(rg2.get('input').attributes())).not.toContain('disabled')

    a.vm.disableAll()

    LocalVue.nextTick(() => {
      expect(_.values(rg0.get('input').attributes())).toContain('disabled')
      expect(_.values(rg1.get('input').attributes())).toContain('disabled')
      expect(_.values(rg2.get('input').attributes())).toContain('disabled')

      a.vm.enableAll()

      LocalVue.nextTick(() => {
        expect(_.values(rg0.get('input').attributes())).not.toContain('disabled')
        expect(_.values(rg1.get('input').attributes())).not.toContain('disabled')
        expect(_.values(rg2.get('input').attributes())).not.toContain('disabled')

        done()
      })
    })
  })

  it('should `disable` one option', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    let rg0 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(0)
    let rg1 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(1)
    let rg2 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(2)

    expect(_.values(rg0.get('input').attributes())).not.toContain('disabled')
    expect(_.values(rg1.get('input').attributes())).not.toContain('disabled')
    expect(_.values(rg2.get('input').attributes())).not.toContain('disabled')

    a.vm.disable('a')

    LocalVue.nextTick(() => {
      expect(_.values(rg0.get('input').attributes())).toContain('disabled')
      expect(_.values(rg1.get('input').attributes())).not.toContain('disabled')
      expect(_.values(rg2.get('input').attributes())).not.toContain('disabled')

      done()
    })
  })

  it('should `disable` multiple options', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    let rg0 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(0)
    let rg1 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(1)
    let rg2 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(2)

    expect(_.values(rg0.get('input').attributes())).not.toContain('disabled')
    expect(_.values(rg1.get('input').attributes())).not.toContain('disabled')
    expect(_.values(rg2.get('input').attributes())).not.toContain('disabled')

    a.vm.disable(['a', 'c'])

    LocalVue.nextTick(() => {
      expect(_.values(rg0.get('input').attributes())).toContain('disabled')
      expect(_.values(rg1.get('input').attributes())).not.toContain('disabled')
      expect(_.values(rg2.get('input').attributes())).toContain('disabled')

      done()
    })
  })

  it('should `disable` one option', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
          disables: ['a']
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    let rg0 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(0)
    let rg1 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(1)
    let rg2 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(2)

    expect(_.values(rg0.get('input').attributes())).toContain('disabled')
    expect(_.values(rg1.get('input').attributes())).not.toContain('disabled')
    expect(_.values(rg2.get('input').attributes())).not.toContain('disabled')

    a.vm.enable('a')

    LocalVue.nextTick(() => {
      expect(_.values(rg0.get('input').attributes())).not.toContain('disabled')
      expect(_.values(rg1.get('input').attributes())).not.toContain('disabled')
      expect(_.values(rg2.get('input').attributes())).not.toContain('disabled')

      done()
    })
  })

  it('should `disable` multiple options', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
          disables: ['a', 'c']
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    let rg0 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(0)
    let rg1 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(1)
    let rg2 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(2)

    expect(_.values(rg0.get('input').attributes())).toContain('disabled')
    expect(_.values(rg1.get('input').attributes())).not.toContain('disabled')
    expect(_.values(rg2.get('input').attributes())).toContain('disabled')

    a.vm.enable(['a', 'c'])

    LocalVue.nextTick(() => {
      expect(_.values(rg0.get('input').attributes())).not.toContain('disabled')
      expect(_.values(rg1.get('input').attributes())).not.toContain('disabled')
      expect(_.values(rg2.get('input').attributes())).not.toContain('disabled')

      done()
    })
  })
})

describe('Radio Element Model', () => {
  it('should have selected value in `value`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    let rg0 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(0)
    let rg1 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(1)
    let rg2 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(2)

    check(rg0)

    expect(a.vm.value).toStrictEqual('a')

    done()
  })

  it('should set `default` value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
          default: 'a'
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    let rg0 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(0)
    let rg1 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(1)
    let rg2 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(2)

    expect(rg0.get('input').element.checked).toBe(true)
    expect(rg1.get('input').element.checked).toBe(false)
    expect(rg2.get('input').element.checked).toBe(false)

    done()
  })

  it('should set `value`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    let rg0 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(0)
    let rg1 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(1)
    let rg2 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(2)

    a.vm.value = 'a'

    LocalVue.nextTick(() => {
      expect(rg0.get('input').element.checked).toBe(true)
      expect(rg1.get('input').element.checked).toBe(false)
      expect(rg2.get('input').element.checked).toBe(false)

      done()
    })
  })

  it('should `update` value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    let rg0 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(0)
    let rg1 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(1)
    let rg2 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(2)

    a.vm.update('a')

    LocalVue.nextTick(() => {
      expect(rg0.get('input').element.checked).toBe(true)
      expect(rg1.get('input').element.checked).toBe(false)
      expect(rg2.get('input').element.checked).toBe(false)

      done()
    })
  })

  it('should `load` value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    let rg0 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(0)
    let rg1 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(1)
    let rg2 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(2)

    form.vm.load({
      a: 'a'
    })

    LocalVue.nextTick(() => {
      expect(rg0.get('input').element.checked).toBe(true)
      expect(rg1.get('input').element.checked).toBe(false)
      expect(rg2.get('input').element.checked).toBe(false)

      done()
    })
  })

  it('should change value if an other option is selected', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    let rg0 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(0)
    let rg1 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(1)
    let rg2 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(2)

    check(rg0)

    expect(a.vm.value).toBe('a')

    check(rg1)

    expect(a.vm.value).toBe('b')

    check(rg2)

    expect(a.vm.value).toBe('c')

    done()
  })
})

describe('Radio Element Events', () => {
  it('should trigger `change` event is an element gets checked', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onChangeMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
          onChange: onChangeMock,
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    let rg0 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(0)
    let rg1 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(1)
    let rg2 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(2)

    check(rg1)

    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toBe('b')
    expect(onChangeMock.mock.calls[0][1]).toBe(null)

    done()
  })

  it('should trigger `change` event is an element gets unchecked', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onChangeMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'radiogroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
          default: 'b',
          onChange: onChangeMock,
        }
      }
    })

    let a = form.findAllComponents({ name: 'RadiogroupElement' }).at(0)

    let rg0 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(0)
    let rg1 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(1)
    let rg2 = a.findAllComponents({ name: 'RadiogroupSlotRadio' }).at(2)

    check(rg2)

    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toBe('c')
    expect(onChangeMock.mock.calls[0][1]).toBe('b')

    done()
  })
})