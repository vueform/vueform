import { createLocalVue, mount } from '@vue/test-utils'
import { createForm, createLaraformInstaller } from './utils/testHelpers'
import { Laraform } from './index'
import config from './config'

describe('Installer', () => {
  it('should install Laraform', () => {
    const form = createForm({}, {
      config: config
    })

    expect(form.vm.$laraform.config).toStrictEqual(config)
  })

  it('should register new theme', () => {
    let customTheme = {
      name: 'custom-theme'
    }

    const form = createForm({}, {
      themes: {
        custom: customTheme
      }
    })

    expect(form.vm.$laraform.themes.custom).toStrictEqual(customTheme)
  })

  it('should register new element', () => {
    const LocalVue = createLocalVue()

    let CustomElement = LocalVue.extend({
      name: 'CustomElement',
      render(h) {
        return h('div', 'Custom Element')
      }
    })

    const { LaraformInstaller, config } = createLaraformInstaller()

    LaraformInstaller.element('custom', CustomElement)

    LocalVue.use(LaraformInstaller)

    let data = {
      schema: {
        custom: {
          type: 'custom'
        }
      }
    }

    let formComponent = LocalVue.extend({
      mixins: [Laraform],
      data() {
        return data
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

    expect(form.findComponent({name: 'CustomElement'}).html()).toContain('Custom Element')
  })

  it('should register elements', () => {
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
      }
    }, {
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
      }
    }, {
      elements: {
        TextElement,
      }
    })

    expect(form.findComponent({name: 'TextElement'}).html()).toContain('Text Element')
  })

  it('should add new component', () => {
    const LocalVue = createLocalVue()

    let CustomComponent = {
      name: 'CustomComponent'
    }

    const { LaraformInstaller, config } = createLaraformInstaller()

    LaraformInstaller.component('CustomComponent', CustomComponent)

    LocalVue.use(LaraformInstaller)

    let data = {
      schema: {
        custom: {
          type: 'text',
        }
      }
    }

    let formComponent = LocalVue.extend({
      mixins: [Laraform],
      data() {
        return data
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

    expect(form.vm.$laraform.components.CustomComponent).toStrictEqual(CustomComponent)
  })

  it('should add components', () => {
    let CustomComponent = {
      name: 'CustomComponent'
    }

    const form = createForm({
      schema: {
        custom: {
          type: 'text',
        }
      }
    }, {
      components: {
        CustomComponent,
      }
    })

    expect(form.vm.$laraform.components.CustomComponent).toStrictEqual(CustomComponent)
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
      }
    }, {
      components: {
        BaseElementLayout,
      }
    })

    expect(form.findComponent({name: 'TextElement'}).html()).toContain('Base Layout')
  })

  it('should register new plugin', () => {
    const LocalVue = createLocalVue()

    let mockInstall = jest.fn((options) => {})

    let CustomPlugin = {
      install: mockInstall,
    }

    const { LaraformInstaller, config } = createLaraformInstaller()

    LaraformInstaller.plugin(CustomPlugin)

    LocalVue.use(LaraformInstaller)

    expect(mockInstall.mock.calls.length).toBe(1)
  })

  it('should register plugin', () => {
    const LocalVue = createLocalVue()

    let mockInstall = jest.fn((options) => {})

    let CustomPlugin = {
      install: mockInstall,
    }

    let CustomPlugin2 = {
      install: mockInstall,
    }

    const { LaraformInstaller, config } = createLaraformInstaller()

    LaraformInstaller.plugins([
      CustomPlugin,
      CustomPlugin2,
    ])

    LocalVue.use(LaraformInstaller)

    expect(mockInstall.mock.calls.length).toBe(2)
  })

  it('should config theme', () => {
    const LocalVue = createLocalVue()

    const { LaraformInstaller, config } = createLaraformInstaller()

    LaraformInstaller.config({
      theme: 'bootstrap'
    })

    LocalVue.use(LaraformInstaller)

    expect(LaraformInstaller.options.config.theme).toBe('bootstrap')
  })

  it('should config labels', () => {
    const LocalVue = createLocalVue()

    const { LaraformInstaller, config } = createLaraformInstaller()

    LaraformInstaller.config({
      labels: true
    })

    LocalVue.use(LaraformInstaller)

    expect(LaraformInstaller.options.config.labels).toBe(true)
  })
})