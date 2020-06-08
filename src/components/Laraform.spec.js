import { createLocalVue, mount } from '@vue/test-utils'
import { createForm, installLaraform } from './../utils/testHelpers'
import { Laraform } from './../index'
import { mergeComponentClasses } from './../utils/mergeClasses'
import defaultTheme from './../themes/default'
import bootstrapTheme from './../themes/bootstrap'

describe('Laraform component', () => {
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

describe('Selecting theme', () => {
  it('should select what is defined in config', () => {
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

  it('should select what is defined in form prop', () => {
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

  it('should select what is defined in form data', () => {
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
})

describe('Theme elements', () => {
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

describe('Theme components', () => {
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

describe('Theme classes', () => {
  it('should use defaults if otherwise set', () => {
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

  it('should overwrite if `classes` defined on form level', () => {
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

  it('should add if `addClasses` defined on form level', () => {
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

  it('should overwrite and add if `classes` and `addClasses` defined on form level', () => {
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