import { createLocalVue } from '@vue/test-utils'
import { createForm } from './utils/testHelpers'
import config from './config'

describe('Installer', () => {
  it('should install Laraform', () => {
    const form = createForm({}, {
      config: config
    })

    expect(form.vm.$laraform.config).toMatchObject(config)
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

    expect(form.vm.$laraform.themes.custom).toMatchObject(customTheme)
  })

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

    expect(form.vm.$laraform.components.CustomComponent).toMatchObject(CustomComponent)
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
})