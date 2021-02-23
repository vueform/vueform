import { createForm, findAllComponents, findAll } from 'test-helpers'
import useFormComponent from './../composables/useFormComponent'

describe('FormLanguage', () => { 
  let form = createForm({
    multilingual: true,
    schema: {
      el: {
        type: 'text',
      }
    }
  })

  let FormLanguage = findAllComponents(form, { name: 'FormLanguage' }).at(0)

  useFormComponent({multilingual:true,schema:{el:{type:'text'}}}, 'FormLanguage', {
    mergeWith: {
      [FormLanguage.vm.containers.state]: {
        [FormLanguage.vm.defaultClasses.active]: FormLanguage.vm.selected,
        [FormLanguage.vm.defaultClasses.inactive]: !FormLanguage.vm.selected,
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

      let tab = findAllComponents(form, { name: 'FormLanguage' }).at(1)
      let languageSelector = form.findComponent({ name: 'FormLanguages' })

      findAll(tab, 'a').last().trigger('click')

      expect(tab.emitted('select')[0][0]).toBe('de')
    })
  })
})