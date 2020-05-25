import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../utils/testHelpers'
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

    expect(form.classes()).toMatchObject([LaraformClasses.form])
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

    expect(form.classes()).toMatchObject([LaraformClasses.form])
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

    expect(form.classes()).toMatchObject([LaraformClasses.form])
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

    expect(form.vm.extendedTheme.components.CustomComponent).toMatchObject(CustomComponent)
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
          type: 'text'
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

    expect(Laraform.vm.extendedClasses).toMatchObject(Laraform.vm.extendedTheme.components.Laraform.data().defaultClasses)
    expect(BaseElementLayout.vm.classes).toMatchObject(BaseElementLayout.vm.defaultClasses)
    expect(ElementLabel.vm.classes).toMatchObject(ElementLabel.vm.defaultClasses)
    expect(FormElements.vm.classes).toMatchObject(FormElements.vm.defaultClasses)
  })

  it('should overwrite if `classes` defined on form level', () => {
    let form = createForm({
      schema: {
        name: {
          type: 'text'
        }
      },
      classes: {
        Laraform: {
          form: 'a'
        },
        BaseElementLayout: {
          container: 'b'
        },
        FormElements: {
          container: 'c'
        },
        ElementLabel: {
          label: 'd'
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

    expect(Laraform.vm.extendedClasses.form).toBe('a')
    expect(BaseElementLayout.vm.classes.container).toBe('b')
    expect(FormElements.vm.classes.container).toBe('c')
    expect(ElementLabel.vm.classes.label).toBe('d')
  })

  it('should add if `addClasses` defined on form level', () => {
    let addClasses = {
      container: 'a',
      b: 'c'
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
    
    expect(BaseElementLayout.vm.classes).toMatchObject(mergeComponentClasses(
      BaseElementLayout.vm.defaultClasses,
      addClasses,
    ))
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
          container: 'a'
        }
      },
      addClasses: {
        BaseElementLayout: {
          container: 'b',
        }
      }
    })

    let BaseElementLayout = form.findComponent({ name: 'BaseElementLayout' })
    
    expect(BaseElementLayout.vm.classes.container).toBe('a b')
  })
})