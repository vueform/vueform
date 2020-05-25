import { createLocalVue, mount } from '@vue/test-utils'
import { createForm, installLaraform } from './../../utils/testHelpers'
import { mergeComponentClasses } from './../../utils/mergeClasses'
import { Laraform } from './../../index'

describe('Element', () => {
  it('should add `class` option to main class list', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          class: 'a'
        }
      }
    })

    expect(form.findComponent({ name: 'TextElement' }).classes()).toContain('a')
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
              container: 'a'
            }
          }
        }
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.vm.classes.container).toBe('a')
  })

  it('should add if `addClasses` defined on element level', () => {
    let addClasses = {
      container: 'a',
      b: 'c'
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
    
    expect(BaseElementLayout.vm.classes).toMatchObject(mergeComponentClasses(
      BaseElementLayout.vm.defaultClasses,
      addClasses,
    ))
  })

  it('should overwrite and add if `classes` and `addClasses` defined on element level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          classes: {
            BaseElementLayout: {
              container: 'a'
            }
          },
          addClasses: {
            BaseElementLayout: {
              container: 'b',
            }
          }
        },
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })
    
    expect(BaseElementLayout.vm.classes.container).toBe('a b')
  })

  it('should overwrite with element\'s `classes` if defined on form and element level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          classes: {
            BaseElementLayout: {
              container: 'b'
            }
          }
        }
      },
      classes: {
        BaseElementLayout: {
          container: 'a'
        }
      }
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.vm.classes.container).toBe('b')
  })

  it('should not add if `classes` defined on both level and `addClasses` defined on form level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          classes: {
            BaseElementLayout: {
              container: 'b'
            }
          }
        }
      },
      classes: {
        BaseElementLayout: {
          container: 'a'
        }
      },
      addClasses: {
        BaseElementLayout: {
          container: 'c'
        }
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.vm.classes.container).toBe('b')
  })

  it('should add if `classes` defined on both level and `addClasses` defined on element level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          classes: {
            BaseElementLayout: {
              container: 'b'
            }
          },
          addClasses: {
            BaseElementLayout: {
              container: 'c'
            }
          },
        }
      },
      classes: {
        BaseElementLayout: {
          container: 'a'
        }
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.vm.classes.container).toBe('b c')
  })

  it('should add if `addClasses` defined on both level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          addClasses: {
            BaseElementLayout: {
              container: 'b'
            }
          },
        }
      },
      addClasses: {
        BaseElementLayout: {
          container: 'a'
        }
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.vm.classes.container).toBe(BaseElementLayout.vm.defaultClasses.container + ' a b')
  })

  it('should add only element\'s classes if `classes` and `addClasses` defined on both level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          classes: {
            BaseElementLayout: {
              container: 'b'
            }
          },
          addClasses: {
            BaseElementLayout: {
              container: 'd'
            }
          },
        }
      },
      classes: {
        BaseElementLayout: {
          container: 'a'
        }
      },
      addClasses: {
        BaseElementLayout: {
          container: 'c'
        }
      },
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    expect(BaseElementLayout.vm.classes.container).toBe('b d')
  })
})

describe('Element slots', () => {
  const LocalVue = createLocalVue()

  it('can assign from element schema', (done) => {
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
    let LocalVue = installLaraform({})

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
      LocalVue
    })

    expect(form.findComponent({name: 'TextElement'}).html()).toContain('Name from slot')
  })
})