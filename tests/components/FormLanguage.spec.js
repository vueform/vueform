import { createForm, findAllComponents, findAll } from 'test-helpers'
import useFormComponent from './../composables/useFormComponent'
import { nextTick } from 'vue'

describe('FormLanguage', () => { 
  useFormComponent({multilingual:true,schema:{el:{type:'text'}}}, 'FormLanguage')

  describe('select', () => {
    it('should emit select event on select', () => {
      let form = createForm({
        languages: {en: 'English', de: 'German'},
        language: 'en',
        multilingual: true,
        schema: {
          name: {
            type: 't-text'
          }
        }
      })

      expect(form.vm.selectedLanguage).toBe('en')

      let tab = findAllComponents(form, { name: 'FormLanguage' }).at(1)
      let languageSelector = form.findComponent({ name: 'FormLanguages' })

      findAll(tab, 'a').last().trigger('click')

      expect(tab.emitted('select')[0][0]).toBe('de')
    })
  })
})