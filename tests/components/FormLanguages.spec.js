import { createForm, findAllComponents, findAll } from 'test-helpers'
import useFormComponent from './../composables/useFormComponent'
import { nextTick } from 'vue'

describe('FormLanguages', () => { 
  useFormComponent({multilingual:true,schema:{el:{type:'text'}}}, 'FormLanguages')

  describe('select', () => {
    it('should select form language by clicking tab', async () => {
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

      await nextTick()

      expect(form.vm.selectedLanguage).toBe('de')
      expect(languageSelector.vm.language).toBe('de')
    })
  })
})