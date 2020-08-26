import { createLocalVue } from '@vue/test-utils'
import { createForm } from './../../src/utils/testHelpers'

describe('Has Translator Mixin', () => {
  it('should translate with vue-i18n', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      wizard: {
        first: {
          label: 'First',
          elements: ['a']
        },
        second: {
          label: 'Second',
          elements: ['b']
        },
      },
      schema: {
        a: {
          type: 'text',
        },
        b: {
          type: 'text',
        },
      }
    }, {
      vueI18n: true
    })
    let next = form.findComponent({ name: 'FormWizardNext' })

    LocalVue.nextTick(() => {
      expect(next.html()).toContain('vue-i18n')
      done()
    })
  })

  it('should replace :params', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        b: {
          type: 'text',
        },
      },
    })

    expect(form.vm.__('validation.accepted', { attribute: 'asdf' })).toContain('asdf')

    done()
  })

  it('should replace {params}', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'text',
        },
        b: {
          type: 'text',
        },
      },
    })

    form.vm.$laraform.locales.en.validation.accepted = 'This is {attribute}'

    expect(form.vm.__('validation.accepted', { attribute: 'asdf' })).toContain('This is asdf')

    done()
  })
})