import { createLocalVue, mount } from '@vue/test-utils'
import { createForm, installLaraform } from './../../src/utils/testHelpers'
import { Laraform } from './../../src/index'
import { mergeComponentClasses } from './../../src/utils/mergeClasses'
import defaultTheme from './../../src/themes/default'
import bootstrapTheme from './../../src/themes/bootstrap'

describe('Laraform Rendering', () => {
  it('should render element from schema', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      }
    })

    expect(form.findComponent({ name: 'TextElement' }).exists()).toBe(true)
  })
})

describe('Laraform Props & Data', () => {
  it('should set class from `class` data', () => {
    let form = createForm({
      class: 'a'
    })
    
    expect(form.classes()).toContain('a')
  })

  it('should set class from `class` form prop', () => {
    let form = createForm({}, {
      propsData: {
        form: {
          class: 'a'
        }
      }
    })

    expect(form.classes()).toContain('a')
  })

  it('should set class from `class` data even if form prop is present', () => {
    let form = createForm({
      class: 'a'
    }, {
      propsData: {
        form: {
          class: 'b'
        }
      }
    })

    expect(form.classes()).toContain('a')
    expect(form.classes()).not.toContain('b')
  })

  it('should retrieve element VMs in elements$ once the form is rendered', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          label: 'A'
        }
      }
    })

    LocalVue.nextTick(() => {
      expect(form.vm.elements$.a.label).toBe('A')

      done()
    })
  })

  it('should select theme what is defined in config', () => {
    let form = createForm({}, {
      config: {
        themes: {
          default: defaultTheme,
        },
        theme: 'default'
      }
    })

    let LaraformClasses = defaultTheme.components.Laraform.data().defaultClasses

    expect(form.classes()).toStrictEqual([LaraformClasses.form])
  })

  it('should select theme what is defined in form prop', () => {
    let form = createForm({}, {
      config: {
        themes: {
          bootstrap: bootstrapTheme,
          default: defaultTheme,
        },
        theme: 'default'
      },
      propsData: {
        form: {
          theme: 'bootstrap'
        }
      }
    })

    let LaraformClasses = bootstrapTheme.components.Laraform.data().defaultClasses

    expect(form.classes()).toStrictEqual([LaraformClasses.form])
  })

  it('should select theme what is defined in form data', () => {
    let form = createForm({
      theme: 'bootstrap'
    }, {
      config: {
        themes: {
          bootstrap: bootstrapTheme,
          default: defaultTheme,
        },
        theme: 'default'
      }
    }, {
      propsData: {
        form: {
          theme: 'default'
        }
      }
    })

    let LaraformClasses = bootstrapTheme.components.Laraform.data().defaultClasses

    expect(form.classes()).toStrictEqual([LaraformClasses.form])
  })

  it('should use defaults classes if otherwise set', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          label: 'Name'
        }
      }
    })

    // Custom logic
    let Laraform = form

    // Custom logic
    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    // Uses ElementComponent mixin
    let ElementLabel = form.findComponent({ name: 'ElementLabel' })

    // Uses ThemeComponent mixin
    let FormElements = form.findComponent({ name: 'FormElements' })

    expect(Laraform.vm.extendedClasses).toStrictEqual(Laraform.vm.defaultClasses)
    expect(BaseElementLayout.classes()).toContain(BaseElementLayout.vm.defaultClasses.container)
    expect(ElementLabel.vm.classes).toStrictEqual(ElementLabel.vm.defaultClasses)
    expect(FormElements.vm.classes).toStrictEqual(FormElements.vm.defaultClasses)
  })

  it('should overwrite classes if `classes` defined on form level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text',
          label: 'Name'
        }
      },
      classes: {
        Laraform: {
          form: 'class-a'
        },
        BaseElementLayout: {
          container: 'class-b'
        },
        FormElements: {
          container: 'class-c'
        },
        ElementLabel: {
          label: 'class-d'
        },
      }
    })

    // Custom logic
    let Laraform = form

    // Custom logic
    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })

    // Uses ElementComponent mixin
    let ElementLabel = form.findComponent({ name: 'ElementLabel' })

    // Uses ThemeComponent mixin
    let FormElements = form.findComponent({ name: 'FormElements' })

    expect(Laraform.vm.extendedClasses.form).toContain('class-a')
    expect(Laraform.vm.extendedClasses.form).not.toContain(Laraform.vm.defaultClasses.form)
    expect(BaseElementLayout.vm.classes.container).toContain('class-b')
    expect(BaseElementLayout.vm.classes.container).not.toContain(BaseElementLayout.vm.defaultClasses.container)
    expect(FormElements.vm.classes.container).toContain('class-c')
    expect(FormElements.vm.classes.container).not.toContain(FormElements.vm.defaultClasses.container)
    expect(ElementLabel.vm.classes.label).toContain('class-d')
    expect(ElementLabel.vm.classes.label).not.toContain(ElementLabel.vm.defaultClasses.label)
  })

  it('should add classes if `addClasses` defined on form level', () => {
    let addClasses = {
      container: 'class-a',
    }

    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      },
      addClasses: {
        BaseElementLayout: addClasses
      }
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })
    
    expect(BaseElementLayout.classes()).toContain('class-a')
    expect(BaseElementLayout.classes()).toContain(BaseElementLayout.vm.defaultClasses.container)
  })

  it('should overwrite and add classes if `classes` and `addClasses` defined on form level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      },
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
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })
    
    expect(BaseElementLayout.classes()).toContain('class-a')
    expect(BaseElementLayout.classes()).toContain('class-b')
    expect(BaseElementLayout.classes()).not.toContain(BaseElementLayout.vm.defaultClasses.container)
  })
})

describe('Laraform Computed', () => {
  it('should return `data`', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        },
        email: {
          type: 'text'
        },
      }
    })

    form.vm.update({
      name: 'a',
      email: 'b'
    })

    expect(form.vm.data).toStrictEqual({
      name: 'a',
      email: 'b'
    })
  })

  it('should return `filtered`', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        },
        email: {
          type: 'text',
          submit: false
        },
      }
    })

    form.vm.update({
      name: 'a',
      email: 'b'
    })

    expect(form.vm.filtered).toStrictEqual({
      name: 'a'
    })
  })

  it('should return `formData`', () => {
    let form = createForm({
      key: 'c',
      schema: {
        name: {
          type: 'text'
        },
        email: {
          type: 'text',
          submit: false
        },
      }
    })

    form.vm.update({
      name: 'a',
      email: 'b'
    })

    expect(form.vm.formData instanceof FormData).toBe(true)
  })
})

describe('Laraform Methods', () => {
  it('should retrieve an element based on path using el$ method', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
          label: 'A'
        }
      }
    })

    LocalVue.nextTick(() => {
      expect(form.vm.el$('a').label).toBe('A')

      done()
    })
  })

  it('should call send on submit', () => {
    const { LocalVue, config } = installLaraform()

    let sendMock = jest.fn(() => {})

    let formComponent = LocalVue.extend({
      mixins: [Laraform],
      data() {
        return {
          schema: {
            name: {
              type: 'text'
            }
          }
        }
      },
      methods: {
        send: sendMock
      }
    })

    let form = mount(formComponent, {
      LocalVue,
      mocks: {
        $laraform: {
          config: config
        }
      }
    })
    
    form.vm.submit()

    expect(sendMock.mock.calls.length).toBe(1)
  })

  it('should prevent submit if disabled', () => {
    const { LocalVue, config } = installLaraform()

    let proceedMock = jest.fn(() => {})

    let formComponent = LocalVue.extend({
      mixins: [Laraform],
      data() {
        return {
          schema: {
            name: {
              type: 'text'
            }
          }
        }
      },
      computed: {
        disabled() {
          return true
        }
      },
      methods: {
        proceed: proceedMock
      }
    })

    let form = mount(formComponent, {
      LocalVue,
      mocks: {
        $laraform: {
          config: config
        }
      }
    })
    
    form.vm.submit()

    expect(proceedMock.mock.calls.length).toBe(0)
  })
})

describe('Laraform Vuex', () => {
  it('should update Vuex store data when form data changes', () => {
    const LocalVue = createLocalVue()

    let form = createForm({
      storePath: 'form',
      schema: {
        a: {
          type: 'text',
          default: 1
        },
        b: {
          type: 'object',
          schema: {
            c: {
              type: 'text',
              default: 2,
            },
            d: {
              type: 'text',
              default: 3,
            }
          }
        },
      },
      storePath: 'form'
    }, {
      vuex: {
        form: {}
      }
    })

    LocalVue.nextTick(() => {
      expect(form.vm.$store.state.form.a).toBe(1)
      expect(form.vm.$store.state.form.b.c).toBe(2)
      expect(form.vm.$store.state.form.b.d).toBe(3)

      let a = form.findAllComponents({ name: 'TextElement' }).at(0)
      expect(a.vm.name).toBe('a')

      let c = form.findAllComponents({ name: 'TextElement' }).at(1)
      expect(c.vm.name).toBe('c')

      let d = form.findAllComponents({ name: 'TextElement' }).at(2)
      expect(d.vm.name).toBe('d')

      a.get('input').setValue('aaa')
      c.get('input').setValue('ccc')
      d.get('input').setValue('ddd')

      LocalVue.nextTick(() => {
        expect(form.vm.$store.state.form.a).toBe('aaa')
        expect(form.vm.$store.state.form.b.c).toBe('ccc')
        expect(form.vm.$store.state.form.b.d).toBe('ddd')
      })
    })
  })

  it('should update form data when Vuex store data changes', () => {
    const LocalVue = createLocalVue()

    let form = createForm({
      storePath: 'form',
      schema: {
        a: {
          type: 'text',
          default: 1
        },
        b: {
          type: 'object',
          schema: {
            c: {
              type: 'text',
              default: 2,
            },
            d: {
              type: 'text',
              default: 3,
            }
          }
        },
      },
      storePath: 'form'
    }, {
      vuex: {
        form: {}
      }
    })

    LocalVue.nextTick(() => {
      let a = form.findAllComponents({ name: 'TextElement' }).at(0)
      expect(a.vm.name).toBe('a')

      let c = form.findAllComponents({ name: 'TextElement' }).at(1)
      expect(c.vm.name).toBe('c')

      let d = form.findAllComponents({ name: 'TextElement' }).at(2)
      expect(d.vm.name).toBe('d')

      expect(a.vm.value).toBe(1)
      expect(c.vm.value).toBe(2)
      expect(d.vm.value).toBe(3)

      form.vm.$store.state.form.a = 'aaa'
      form.vm.$store.state.form.b.c = 'ccc'
      form.vm.$store.state.form.b.d = 'ddd'

      LocalVue.nextTick(() => {
        expect(a.vm.value).toBe('aaa')
        expect(c.vm.value).toBe('ccc')
        expect(d.vm.value).toBe('ddd')
      })
    })
  })
})

describe('Laraform Elements', () => {
  it('should register new element', () => {
    const LocalVue = createLocalVue()

    let CustomElement = LocalVue.extend({
      name: 'CustomElement',
      render(h) {
        return h('div', 'Custom Element')
      }
    })

    const form = createForm({
      schema: {
        custom: {
          type: 'custom',
        }
      },
      elements: {
        CustomElement,
      }
    })

    expect(form.findComponent({name: 'CustomElement'}).html()).toContain('Custom Element')
  })

  it('should overwrite existing element', () => {
    const LocalVue = createLocalVue()

    let TextElement = LocalVue.extend({
      name: 'TextElement',
      render(h) {
        return h('div', 'Text Element')
      }
    })

    const form = createForm({
      schema: {
        custom: {
          type: 'text',
        }
      },
      elements: {
        TextElement,
      }
    })

    expect(form.findComponent({name: 'TextElement'}).html()).toContain('Text Element')
  })
})

describe('Laraform Components', () => {
  it('should add new component', () => {
    let CustomComponent = {
      name: 'CustomComponent'
    }

    const form = createForm({
      schema: {
        custom: {
          type: 'text',
        }
      },
      components: {
        CustomComponent,
      }
    })

    expect(form.vm.extendedTheme.components.CustomComponent).toStrictEqual(CustomComponent)
  })

  it('should overwrite existing component', () => {
    const LocalVue = createLocalVue()

    let BaseElementLayout = LocalVue.extend({
      name: 'BaseElementLayout',
      render(h) {
        return h('div', 'Base Layout')
      }
    })

    const form = createForm({
      schema: {
        custom: {
          type: 'text',
        }
      },
      components: {
        BaseElementLayout,
      }
    })

    expect(form.findComponent({name: 'TextElement'}).html()).toContain('Base Layout')
  })
})

describe('Laraform Dynamics', () => {
  it('should update elements$ when schema changes', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done
    
    let form = createForm({
      schema: {
        a: {
          type: 'text'
        }
      }
    })

    expect(_.keys(form.vm.elements$).length).toBe(1)

    form.setData({
      schema: {
        a: {
          type: 'text'
        },
        b: {
          type: 'text'
        },
      }
    })

    LocalVue.nextTick(() => {
    LocalVue.nextTick(() => {
      expect(_.keys(form.vm.elements$).length).toBe(2)
      
      done()
    })
    })
  })
})