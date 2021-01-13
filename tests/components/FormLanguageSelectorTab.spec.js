import { createForm, findAllComponents, findAll } from 'test-helpers'
import useFormComponent from './../composables/useFormComponent'

describe('FormLanguageSelectorTab', () => { 
  let form = createForm({
    multilingual: true,
    schema: {
      el: {
        type: 'text',
      }
    }
  })

  let FormLanguageSelectorTab = findAllComponents(form, { name: 'FormLanguageSelectorTab' }).at(0)

  useFormComponent({multilingual:true,schema:{el:{type:'text'}}}, 'FormLanguageSelectorTab', {
    mergeWith: {
      [FormLanguageSelectorTab.vm.containers.state]: {
        [FormLanguageSelectorTab.vm.defaultClasses.active]: FormLanguageSelectorTab.vm.selected,
        [FormLanguageSelectorTab.vm.defaultClasses.inactive]: !FormLanguageSelectorTab.vm.selected,
      }
    }
  })

  describe('select', () => {
    it('should emit select event on select', () => {
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

      let tab = findAllComponents(form, { name: 'FormLanguageSelectorTab' }).at(1)
      let languageSelector = form.findComponent({ name: 'FormLanguageSelector' })

      findAll(tab, 'a').last().trigger('click')

      expect(tab.emitted('select')[0][0]).toBe('de')
    })
  })
})