import { createForm } from './../../src/utils/testHelpers'

describe('Form Language Selector', () => {  
  it('should select form language by clicking tab', () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        de: {
          label: 'German',
          code: 'de'
        },
      },
      language: 'en',
      multilingual: true,
      schema: {
        name: {
          type: 't-text'
        }
      }
    })

    expect(form.vm.language).toBe('en')

    let tab = form.findAllComponents({ name: 'FormLanguageSelectorTab' }).at(1).get('a')
    let languageSelector = form.findComponent({ name: 'FormLanguageSelector' })

    tab.trigger('click')

    expect(form.vm.language).toBe('de')
    expect(languageSelector.vm.language).toBe('de')
  })
})