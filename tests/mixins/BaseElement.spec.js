import { createLocalVue, mount } from '@vue/test-utils'
import { createForm, installLaraform, createLaraformInstaller } from './../../src/utils/testHelpers'
import { mergeComponentClasses } from './../../src/utils/mergeClasses'
import { Laraform } from './../../src/index'
import defaultTheme from './../../src/themes/default'

describe('Element Props & Data', () => {
  it('should add `class` option to main class list', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          class: 'class-a'
        }
      }
    })

    expect(form.findComponent({ name: 'TextElement' }).classes()).toContain('class-a')
  })
})

describe('Element Computed', () => {
  it('should display `path` properly without parent', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      }
    })

    expect(form.findComponent({ name: 'TextElement' }).vm.path).toBe('name')
  })

  it('should update `model` on value change', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    name.get('input').setValue('aaa')

    expect(name.vm.model).toBe('aaa')
  })

  it('should have `data` as name => value', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    name.get('input').setValue('aaa')

    expect(name.vm.data).toStrictEqual({name: 'aaa'})
  })

  it('should have empty `filtered` when `submit` is false', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          submit: false
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    name.get('input').setValue('aaa')

    expect(name.vm.filtered).toStrictEqual({})
  })

  it('should have empty `filtered` when `submit` is true && `available` is true', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          submit: true
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    name.get('input').setValue('aaa')

    expect(name.vm.available).toBe(true)
    expect(name.vm.filtered).toStrictEqual({name: 'aaa'})
  })

  it('should have a `default` equal to null if otherwise defined', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.default).toBe(name.vm.null)
  })

  it('should have a `default` defined as `default`', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          default: 'aaa'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.default).toBe('aaa')
  })

  it('should overwrite classes if `classes` defined on element level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          classes: {
            BaseElementLayout: {
              container: 'class-a'
            }
          }
        }
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.classes()).toContain('class-a')
    expect(BaseElementLayout.classes()).not.toContain(BaseElementLayout.vm.defaultClasses.container)
  })

  it('should add classes if `addClasses` defined on element level', () => {
    let addClasses = {
      container: 'class-a',
    }

    let form = createForm({
      schema: {
        name: {
          type: 'text',
          addClasses: {
            BaseElementLayout: addClasses
          }
        }
      }
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })
    
    expect(BaseElementLayout.classes()).toContain('class-a')
  })

  it('should overwrite and add classes if `classes` and `addClasses` defined on element level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          classes: {
            BaseElementLayout: {
              container: 'class-a'
            }
          },
          addClasses: {
            BaseElementLayout: {
              container: 'class-b',
            }
          }
        },
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })
    
    expect(BaseElementLayout.classes()).toContain('class-a')
    expect(BaseElementLayout.classes()).toContain('class-b')
    expect(BaseElementLayout.classes()).not.toContain(BaseElementLayout.vm.defaultClasses.container)
  })

  it('should overwrite classes with element\'s `classes` if defined on form and element level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          classes: {
            BaseElementLayout: {
              container: 'class-b'
            }
          }
        }
      },
      classes: {
        BaseElementLayout: {
          container: 'class-a'
        }
      }
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.classes()).toContain('class-b')
    expect(BaseElementLayout.classes()).not.toContain('class-a')
    expect(BaseElementLayout.classes()).not.toContain(BaseElementLayout.vm.defaultClasses.container)
  })

  it('should not add classes if `classes` defined on both level and `addClasses` defined on form level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          classes: {
            BaseElementLayout: {
              container: 'class-b'
            }
          }
        }
      },
      classes: {
        BaseElementLayout: {
          container: 'class-a'
        }
      },
      addClasses: {
        BaseElementLayout: {
          container: 'class-c'
        }
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.classes()).toContain('class-b')
    expect(BaseElementLayout.classes()).not.toContain('class-a')
    expect(BaseElementLayout.classes()).not.toContain('class-c')
    expect(BaseElementLayout.classes()).not.toContain(BaseElementLayout.vm.defaultClasses.container)
  })

  it('should add classes if `classes` defined on both level and `addClasses` defined on element level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          classes: {
            BaseElementLayout: {
              container: 'class-b'
            }
          },
          addClasses: {
            BaseElementLayout: {
              container: 'class-c'
            }
          },
        }
      },
      classes: {
        BaseElementLayout: {
          container: 'class-a'
        }
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.classes()).toContain('class-b')
    expect(BaseElementLayout.classes()).toContain('class-c')
    expect(BaseElementLayout.classes()).not.toContain('class-a')
    expect(BaseElementLayout.classes()).not.toContain(BaseElementLayout.vm.defaultClasses.container)
  })

  it('should add classes if `addClasses` defined on both level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          addClasses: {
            BaseElementLayout: {
              container: 'class-b'
            }
          },
        }
      },
      addClasses: {
        BaseElementLayout: {
          container: 'class-a'
        }
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.classes()).toContain('class-a')
    expect(BaseElementLayout.classes()).toContain('class-b')
  })

  it('should add only element\'s classes to if `classes` and `addClasses` defined on both level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          classes: {
            BaseElementLayout: {
              container: 'class-b'
            }
          },
          addClasses: {
            BaseElementLayout: {
              container: 'class-d'
            }
          },
        }
      },
      classes: {
        BaseElementLayout: {
          container: 'class-a'
        }
      },
      addClasses: {
        BaseElementLayout: {
          container: 'class-c'
        }
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.classes()).toContain('class-b')
    expect(BaseElementLayout.classes()).toContain('class-d')
    expect(BaseElementLayout.classes()).not.toContain('class-a')
    expect(BaseElementLayout.classes()).not.toContain('class-c')
    expect(BaseElementLayout.classes()).not.toContain(BaseElementLayout.vm.defaultClasses.container)
  })
})

describe('Element Methods', () => {
  it('should update value', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    name.vm.update('aaa')

    expect(name.vm.value).toBe('aaa')
  })

  it('should reset value to default when calling `reset()`', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          default: 'aaa'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    name.get('input').setValue('bbb')

    expect(name.vm.value).toBe('bbb')

    name.vm.reset()

    expect(name.vm.value).toBe('aaa')
  })

  it('should reset value to `null` when calling `clear()`', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          default: 'aaa'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    name.get('input').setValue('bbb')

    expect(name.vm.value).toBe('bbb')

    name.vm.clear()

    expect(name.vm.value).toBe(name.vm.null)
  })

  it('should load value when available', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    name.vm.load({
      name: 'aaa'
    })

    expect(name.vm.available).toBe(true)
    expect(name.vm.value).toBe('aaa')
  })

  it('should clear value when `available` false and being loaded', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          conditions: [
            ['condition', 1]
          ]
        },
        condition: {
          type: 'text'
        },
      }
    })
    
    let name = form.findComponent({ name: 'TextElement' })

    expect(name.vm.available).toBe(false)
    
    name.vm.load({
      name: 'aaa'
    })

    expect(name.vm.value).toBe(name.vm.null)
  })

  it('should clear value when the element\'s name is not presented in loaded data', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      }
    })

    let name = form.findComponent({ name: 'TextElement' })

    name.vm.load({
      email: 'aaa'
    })

    expect(name.vm.value).toBe(name.vm.null)
  })
})


describe('Element Components', () => {
  it('should overwrite existing component', () => {
    const LocalVue = createLocalVue()

    const form = createForm({
      schema: {
        custom: {
          type: 'text',
          label: 'a',
          components: {
            BaseElementLayout: LocalVue.extend({
              name: 'BaseElementLayout',
              render(h) {
                return h('div', 'Base Layout')
              }
            })
          }
        },
      },
    })

    expect(form.findComponent({name: 'TextElement'}).html()).toContain('Base Layout')
  })
})

describe('Element Slots', () => {
  it('can assign from element schema', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        name: {
          type: 'text',
          label: 'Name',
          slots: {
            label: LocalVue.extend({
              props: ['el$'],
              render(h) {
                return h('div', this.el$.label + ' from slot')
              }
            })
          }
        }
      }
    })

    LocalVue.nextTick(() => {
      expect(form.findComponent({name: 'TextElement'}).html()).toContain('Name from slot')
      done()
    })
  })

  it('can assign from form template', () => {
    let { LocalVue } = installLaraform({})

    let component = LocalVue.extend({
      mixins: [Laraform],
      data() {
        return {
          schema: {
            name: {
              type: 'text',
              label: 'Name'
            }
          }
        }
      },
      render(h) {
        return h('form', [
          h(this.extendedTheme.elements.TextElement, {
            props: {
              schema: this.schema.name,
              name: 'name'
            },
            directives: [
              {
                name: 'ref',
                arg: 'elements$'
              }
            ],
            scopedSlots: {
              label: (props) => {
                return h('div', props.el$.label + ' from slot')
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

    expect(form.findComponent({name: 'TextElement'}).html()).toContain('Name from slot')
  })

  it('gets rerendered when schema changes', (done) => {
    const LocalVue = createLocalVue()
    
    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        name: {
          type: 'text',
          label: 'Name',
          slots: {
            label: LocalVue.extend({
              props: ['el$'],
              render(h) {
                return h('div', this.el$.label + ' from slot')
              }
            })
          }
        }
      }
    })

    LocalVue.nextTick(() => {
      expect(form.findComponent({name: 'TextElement'}).html()).toContain('Name from slot')

      form.vm.schema.name.label = 'Name2'

      LocalVue.nextTick(() => {
        expect(form.findComponent({name: 'TextElement'}).html()).toContain('Name2 from slot')

        done()
      })
    })
  })
})