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
})