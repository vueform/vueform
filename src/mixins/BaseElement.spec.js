import { createLocalVue, mount } from '@vue/test-utils'
import { createForm, installLaraform } from './../utils/testHelpers'
import { mergeComponentClasses } from './../utils/mergeClasses'
import { Laraform } from './../index'

describe('Element', () => {
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

  it('should display path properly without parent', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      }
    })

    expect(form.findComponent({ name: 'TextElement' }).vm.path).toBe('name')
  })
})

describe('Element classes', () => {
  it('should overwrite if `classes` defined on element level', () => {
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

  it('should add if `addClasses` defined on element level', () => {
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

  it('should overwrite and add if `classes` and `addClasses` defined on element level', () => {
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

  it('should overwrite with element\'s `classes` if defined on form and element level', () => {
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

  it('should not add if `classes` defined on both level and `addClasses` defined on form level', () => {
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

  it('should add if `classes` defined on both level and `addClasses` defined on element level', () => {
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

  it('should add if `addClasses` defined on both level', () => {
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

  it('should add only element\'s classes if `classes` and `addClasses` defined on both level', () => {
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


describe('Element components', () => {
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

describe('Element slots', () => {
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
          config: {}
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