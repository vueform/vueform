import { createLocalVue, mount } from '@vue/test-utils'
import { createForm, installLaraform, check, uncheck } from './../../../src/utils/testHelpers'
import { Laraform } from './../../../src/index'

describe('Checkbox Element Rendering', () => {
  it('should render checkboxes', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    let cbg0 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(0)
    let cbg1 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(1)

    expect(cbg0.exists()).toBe(true)
    expect(cbg1.exists()).toBe(true)

    done()
  })
  
  it('should be able to use custom slot for checkbox', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
          },
          slots: {
            checkbox: LocalVue.extend({
              props: ['el$', 'item', 'value'],
              render(h) {
                return h('div', this.item + ' checkbox')
              }
            })
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    expect(a.html()).toContain('aaa checkbox')
    expect(a.html()).toContain('bbb checkbox')

    done()
  })

  it('should be able to use inline slot for checkbox', () => {
    let { LocalVue } = installLaraform({})

    let component = LocalVue.extend({
      mixins: [Laraform],
      data() {
        return {
          schema: {
            a: {
              type: 'checkboxgroup',
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
          h(this.extendedTheme.elements.CheckboxgroupElement, {
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
              checkbox: (props) => {
                return h('div', props.item + ' checkbox')
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

    let a = form.findAllComponents({name: 'CheckboxgroupElement'}).at(0)

    expect(a.html()).toContain('aaa checkbox')
    expect(a.html()).toContain('bbb checkbox')
  })

  it('should disable checkboxes defined in `disables`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
          disables: ['a', 'c']
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    let cbg0 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(0)
    let cbg1 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(1)
    let cbg2 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(2)

    expect(_.values(cbg0.get('input').attributes())).toContain('disabled')
    expect(_.values(cbg1.get('input').attributes())).not.toContain('disabled')
    expect(_.values(cbg2.get('input').attributes())).toContain('disabled')

    done()
  })

  it('should disable all checkboxes `disabled` is true', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
          disabled: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    let cbg0 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(0)
    let cbg1 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(1)
    let cbg2 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(2)

    expect(_.values(cbg0.get('input').attributes())).toContain('disabled')
    expect(_.values(cbg1.get('input').attributes())).toContain('disabled')
    expect(_.values(cbg2.get('input').attributes())).toContain('disabled')

    done()
  })
})

describe('Checkbox Element Props', () => {
  it('should have an empty object for `items` by default', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    expect(a.vm.items).toStrictEqual({})

    done()
  })

  it('should set `items` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

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
          type: 'checkboxgroup',
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

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
          type: 'checkboxgroup',
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    expect(a.vm.disables).toStrictEqual([])

    done()
  })

  it('should set `disables` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
          disables: ['a', 'b']
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    expect(a.vm.disables).toStrictEqual(['a', 'b'])

    done()
  })

  it('should set `disables` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

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
          type: 'checkboxgroup',
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    expect(a.vm.disabled).toBe(false)

    done()
  })

  it('should set `disabled` from schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
          disabled: true
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    expect(a.vm.disabled).toBe(true)

    done()
  })

  it('should set `disabled` to schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    expect(a.vm.disabled).toBe(false)

    a.vm.disabled = true

    expect(a.vm.disabled).toBe(true)

    done()
  })

  it('should have an empty array as `null`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    expect(a.vm.null).toStrictEqual([])

    done()
  })

  it('should have true for `isArrayType`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    expect(a.vm.isArrayType).toBe(true)

    done()
  })
})

describe('Checkbox Element Methods', () => {
  it('should `checkAll`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    expect(a.vm.value).toStrictEqual([])

    a.vm.checkAll()

    expect(a.vm.value).toStrictEqual(['a', 'b', 'c'])

    done()
  })

  it('should `uncheckAll`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    expect(a.vm.value).toStrictEqual([])

    a.vm.checkAll()

    expect(a.vm.value).toStrictEqual(['a', 'b', 'c'])

    a.vm.uncheckAll()

    expect(a.vm.value).toStrictEqual([])

    done()
  })

  it('should `disableAll`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    let cbg0 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(0)
    let cbg1 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(1)
    let cbg2 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(2)

    expect(_.values(cbg0.get('input').attributes())).not.toContain('disabled')
    expect(_.values(cbg1.get('input').attributes())).not.toContain('disabled')
    expect(_.values(cbg2.get('input').attributes())).not.toContain('disabled')

    a.vm.disableAll()

    LocalVue.nextTick(() => {
      expect(_.values(cbg0.get('input').attributes())).toContain('disabled')
      expect(_.values(cbg1.get('input').attributes())).toContain('disabled')
      expect(_.values(cbg2.get('input').attributes())).toContain('disabled')

      done()
    })
  })

  it('should `enableAll`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    let cbg0 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(0)
    let cbg1 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(1)
    let cbg2 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(2)

    expect(_.values(cbg0.get('input').attributes())).not.toContain('disabled')
    expect(_.values(cbg1.get('input').attributes())).not.toContain('disabled')
    expect(_.values(cbg2.get('input').attributes())).not.toContain('disabled')

    a.vm.disableAll()

    LocalVue.nextTick(() => {
      expect(_.values(cbg0.get('input').attributes())).toContain('disabled')
      expect(_.values(cbg1.get('input').attributes())).toContain('disabled')
      expect(_.values(cbg2.get('input').attributes())).toContain('disabled')

      a.vm.enableAll()

      LocalVue.nextTick(() => {
        expect(_.values(cbg0.get('input').attributes())).not.toContain('disabled')
        expect(_.values(cbg1.get('input').attributes())).not.toContain('disabled')
        expect(_.values(cbg2.get('input').attributes())).not.toContain('disabled')

        done()
      })
    })
  })

  it('should `check` an option', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    expect(a.vm.value).toStrictEqual([])

    a.vm.check('a')

    expect(a.vm.value).toStrictEqual(['a'])

    done()
  })

  it('should `check` multiple options', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    expect(a.vm.value).toStrictEqual([])

    a.vm.check(['a', 'c'])

    expect(a.vm.value).toStrictEqual(['a', 'c'])

    done()
  })

  it('should `uncheck` an option', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    expect(a.vm.value).toStrictEqual([])

    a.vm.check('a')

    expect(a.vm.value).toStrictEqual(['a'])

    a.vm.uncheck('a')

    expect(a.vm.value).toStrictEqual([])

    done()
  })

  it('should `uncheck` multiple options', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    expect(a.vm.value).toStrictEqual([])

    a.vm.check(['a', 'b', 'c'])

    expect(a.vm.value).toStrictEqual(['a', 'b', 'c'])

    a.vm.uncheck(['a', 'c'])

    expect(a.vm.value).toStrictEqual(['b'])

    done()
  })

  it('should `disable` one option', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    let cbg0 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(0)
    let cbg1 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(1)
    let cbg2 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(2)

    expect(_.values(cbg0.get('input').attributes())).not.toContain('disabled')
    expect(_.values(cbg1.get('input').attributes())).not.toContain('disabled')
    expect(_.values(cbg2.get('input').attributes())).not.toContain('disabled')

    a.vm.disable('a')

    LocalVue.nextTick(() => {
      expect(_.values(cbg0.get('input').attributes())).toContain('disabled')
      expect(_.values(cbg1.get('input').attributes())).not.toContain('disabled')
      expect(_.values(cbg2.get('input').attributes())).not.toContain('disabled')

      done()
    })
  })

  it('should `disable` multiple options', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    let cbg0 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(0)
    let cbg1 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(1)
    let cbg2 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(2)

    expect(_.values(cbg0.get('input').attributes())).not.toContain('disabled')
    expect(_.values(cbg1.get('input').attributes())).not.toContain('disabled')
    expect(_.values(cbg2.get('input').attributes())).not.toContain('disabled')

    a.vm.disable(['a', 'c'])

    LocalVue.nextTick(() => {
      expect(_.values(cbg0.get('input').attributes())).toContain('disabled')
      expect(_.values(cbg1.get('input').attributes())).not.toContain('disabled')
      expect(_.values(cbg2.get('input').attributes())).toContain('disabled')

      done()
    })
  })

  it('should `disable` one option', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
          disables: ['a']
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    let cbg0 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(0)
    let cbg1 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(1)
    let cbg2 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(2)

    expect(_.values(cbg0.get('input').attributes())).toContain('disabled')
    expect(_.values(cbg1.get('input').attributes())).not.toContain('disabled')
    expect(_.values(cbg2.get('input').attributes())).not.toContain('disabled')

    a.vm.enable('a')

    LocalVue.nextTick(() => {
      expect(_.values(cbg0.get('input').attributes())).not.toContain('disabled')
      expect(_.values(cbg1.get('input').attributes())).not.toContain('disabled')
      expect(_.values(cbg2.get('input').attributes())).not.toContain('disabled')

      done()
    })
  })

  it('should `disable` multiple options', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
          disables: ['a', 'c']
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    let cbg0 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(0)
    let cbg1 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(1)
    let cbg2 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(2)

    expect(_.values(cbg0.get('input').attributes())).toContain('disabled')
    expect(_.values(cbg1.get('input').attributes())).not.toContain('disabled')
    expect(_.values(cbg2.get('input').attributes())).toContain('disabled')

    a.vm.enable(['a', 'c'])

    LocalVue.nextTick(() => {
      expect(_.values(cbg0.get('input').attributes())).not.toContain('disabled')
      expect(_.values(cbg1.get('input').attributes())).not.toContain('disabled')
      expect(_.values(cbg2.get('input').attributes())).not.toContain('disabled')

      done()
    })
  })
})

describe('Checkbox Element Model', () => {
  it('should have selected values in `value`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          }
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    let cbg0 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(0)
    let cbg1 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(1)
    let cbg2 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(2)

    check(cbg0)
    check(cbg2)

    expect(a.vm.value).toStrictEqual(['a', 'c'])

    done()
  })

  it('should set `default` values', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
          default: ['a', 'c']
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    let cbg0 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(0)
    let cbg1 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(1)
    let cbg2 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(2)

    expect(cbg0.get('input').element.checked).toBe(true)
    expect(cbg1.get('input').element.checked).toBe(false)
    expect(cbg2.get('input').element.checked).toBe(true)

    done()
  })

  it('should set `value`', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    let cbg0 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(0)
    let cbg1 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(1)
    let cbg2 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(2)

    a.vm.value = ['a', 'c']

    LocalVue.nextTick(() => {
      expect(cbg0.get('input').element.checked).toBe(true)
      expect(cbg1.get('input').element.checked).toBe(false)
      expect(cbg2.get('input').element.checked).toBe(true)

      done()
    })
  })

  it('should `update` value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    let cbg0 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(0)
    let cbg1 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(1)
    let cbg2 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(2)

    a.vm.update(['a', 'c'])

    LocalVue.nextTick(() => {
      expect(cbg0.get('input').element.checked).toBe(true)
      expect(cbg1.get('input').element.checked).toBe(false)
      expect(cbg2.get('input').element.checked).toBe(true)

      done()
    })
  })

  it('should `load` value', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    let cbg0 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(0)
    let cbg1 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(1)
    let cbg2 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(2)

    form.vm.load({
      a: ['a', 'c']
    })

    LocalVue.nextTick(() => {
      expect(cbg0.get('input').element.checked).toBe(true)
      expect(cbg1.get('input').element.checked).toBe(false)
      expect(cbg2.get('input').element.checked).toBe(true)

      done()
    })
  })
})

describe('Checkbox Element Events', () => {
  it('should trigger `change` event is an element gets checked', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onChangeMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
          onChange: onChangeMock,
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    let cbg0 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(0)
    let cbg1 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(1)
    let cbg2 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(2)

    check(cbg1)

    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toStrictEqual([])
    expect(onChangeMock.mock.calls[0][1]).toStrictEqual(['b'])

    done()
  })

  it('should trigger `change` event is an element gets unchecked', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let onChangeMock = jest.fn(() => {})

    let form = createForm({
      schema: {
        a: {
          type: 'checkboxgroup',
          items: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
          },
          default: ['b'],
          onChange: onChangeMock,
        }
      }
    })

    let a = form.findAllComponents({ name: 'CheckboxgroupElement' }).at(0)

    let cbg0 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(0)
    let cbg1 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(1)
    let cbg2 = a.findAllComponents({ name: 'CheckboxgroupSlotCheckbox' }).at(2)

    uncheck(cbg1)

    expect(onChangeMock.mock.calls.length).toBe(1)
    expect(onChangeMock.mock.calls[0][0]).toStrictEqual(['b'])
    expect(onChangeMock.mock.calls[0][1]).toStrictEqual([])

    done()
  })
})