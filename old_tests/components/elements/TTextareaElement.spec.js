import { createLocalVue } from '@vue/test-utils'
import { createForm, findAllComponents } from 'test-helpers'

describe('TTextarea Element', () => {
  it('should render t-textarea element', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      multilingual: true,
      schema: {
        a: {
          type: 't-textarea'
        }
      }
    })

    let a = findAllComponents(form, { name: 'TTextareaElement' }).at(0)

    expect(a.exists()).toBe(true)

    done()
  })

  it('should invoke `autosize.update` if autogrow is true and language is changed', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let autosizeUpdateMock = jest.fn(() => {})

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        hu: {
          label: 'Hungarian',
          code: 'hu'
        },
      },
      schema: {
        a: {
          type: 't-textarea',
          autogrow: true
        }
      }
    })

    let a = findAllComponents(form, { name: 'TTextareaElement' }).at(0)

    a.vm.$laraform.services.autosize = jest.fn(() => {})
    a.vm.$laraform.services.autosize.update = autosizeUpdateMock

    expect(autosizeUpdateMock.mock.calls.length).toBe(0)

    form.vm.setLanguage('hu')

    LocalVue.nextTick(() => {
      expect(autosizeUpdateMock.mock.calls.length).toBe(1)

      done()
    })
  })

  it('should not invoke `autosize.update` if autogrow is false and language is changed', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let autosizeUpdateMock = jest.fn(() => {})

    let form = createForm({
      multilingual: true,
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        hu: {
          label: 'Hungarian',
          code: 'hu'
        },
      },
      schema: {
        a: {
          type: 't-textarea',
          autogrow: false
        }
      }
    })

    let a = findAllComponents(form, { name: 'TTextareaElement' }).at(0)

    a.vm.$laraform.services.autosize = jest.fn(() => {})
    a.vm.$laraform.services.autosize.update = autosizeUpdateMock

    expect(autosizeUpdateMock.mock.calls.length).toBe(0)

    form.vm.setLanguage('hu')

    LocalVue.nextTick(() => {
      expect(autosizeUpdateMock.mock.calls.length).toBe(0)

      done()
    })
  })
})