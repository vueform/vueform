import { createForm, findAllComponents, findAll } from 'test-helpers'
import useFormComponent from './../composables/useFormComponent'
import { nextTick } from 'composition-api'

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
      wrapper: FormLanguage.vm.classes.wrapper_active
    }
  })

  describe('classes', () => {
    it('should add inactive class but not active to wrapper when inactive', async () => {
      let form = createForm({
        multilingual: true,
        languages: {
          en: { label: 'English', code: 'en' },
          de: { label: 'German', code: 'de' },
        },
        language: 'en',
        overrideClasses: {
          FormLanguage: {
            inactive: 'inactive'
          }
        },
        schema: {
          el: {
            type: 'text',
          }
        }
      })

      await nextTick()

      let component = findAllComponents(form, { name: 'FormLanguage' }).at(0).vm

      expect(component.classes.wrapper).not.toContain(component.classes.wrapper_inactive)
      expect(component.classes.wrapper).toContain(component.classes.wrapper_active)

      form.vm.selectedLanguage = 'de'

      await nextTick()

      component = findAllComponents(form, { name: 'FormLanguage' }).at(0).vm

      expect(component.classes.wrapper).toContain(component.classes.wrapper_inactive)
      expect(component.classes.wrapper).not.toContain(component.classes.wrapper_active)
      
    // destroy(form) // teardown
    })
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

      expect(form.vm.selectedLanguage).toBe('en')

      let tab = findAllComponents(form, { name: 'FormLanguage' }).at(1)
      let languageSelector = form.findComponent({ name: 'FormLanguages' })

      findAll(tab, 'a').last().trigger('click')

      expect(tab.emitted('select')[0][0]).toBe('de')
    })
  })
})