import flushPromises from 'flush-promises'
import { createForm, findAllComponents, testComputedOption } from 'test-helpers'
import { FileWatcherEventKind } from 'typescript'
import { nextTick } from 'vue'
import Validator from './../../src/services/validation/validator'

export default function(elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    // Data
    it('should not be `dirty` by default', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = form.findComponent({ name: elementName })

      await nextTick()
      await nextTick()

      expect(el.vm.dirty).toBe(false)
    })

    it('should be `validated` "true" if has no rules by default', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.validated).toBe(true)
    })

    it('should be `validated` "false" if has rules by default', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            rules: 'required'
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.validated).toBe(false)
    })
    
    it('should be `validated` true only if validation ran once at least', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            rules: 'required'
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.validated).toBe(false)

      el.vm.validate()

      await flushPromises()

      expect(el.vm.validated).toBe(true)
    })

    // Computed Options
    testComputedOption(it, elementType, 'rules', undefined, 'required')
    testComputedOption(it, elementType, 'messages', {}, {required:'Required'})
    testComputedOption(it, elementType, 'displayError', true, false)
    
    // Computed Props
    it('should have `dirty` "true" if state.dirty is true', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.state.dirty = true

      expect(el.vm.dirty).toBe(true)
    })
    
    it('should have `dirty` "false" if state.dirty is false', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.state.dirty = false

      expect(el.vm.dirty).toBe(false)
    })
    
    it('should have `validated` "true" if state.validated is true', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.state.validated = true

      expect(el.vm.validated).toBe(true)
    })
    
    it('should have `validated` "false" if state.validated is false', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.state.validated = false

      expect(el.vm.validated).toBe(false)
    })
    
    it('should have `invalid` "true" if any of the validators is invalid', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            rules: 'required|email'
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.update('value')

      el.vm.validate()

      await flushPromises()

      expect(el.vm.invalid).toBe(true)
    })
    
    it('should have `invalid` "false" if none of the validators is invalid', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            rules: 'required|email'
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.update('value@domain.com')

      el.vm.validate()

      await flushPromises()

      expect(el.vm.invalid).toBe(false)
    })
    
    it('should have `pending` & `busy` "true" if any of the validators is pending and "false" when async validation finished', async () => {
      let axiosPostMock = jest.fn(() => Promise.resolve({ data: {} }))

      let form = createForm({
        schema: {
          el: {
            type: elementType,
            rules: 'unique:param'
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.$laraform.services.axios.post = axiosPostMock

      el.vm.validate()

      expect(el.vm.pending).toBe(true)
      expect(el.vm.busy).toBe(true)

      await flushPromises()

      expect(el.vm.pending).toBe(false)
      expect(el.vm.busy).toBe(false)
    })
    
    it('should have `debouncing` & `busy` "true" if any of the validators is debouncing and "false" when async it finishes', async () => {
      let axiosPostMock = jest.fn(() => Promise.resolve({ data: {} }))

      let form = createForm({
        schema: {
          el: {
            type: elementType,
            rules: 'required',
            debounce: 1,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.$laraform.services.axios.post = axiosPostMock

      el.vm.validate()

      expect(el.vm.debouncing).toBe(true)
      expect(el.vm.busy).toBe(true)

      await flushPromises()

      expect(el.vm.debouncing).toBe(false)
      expect(el.vm.busy).toBe(false)
    })
    
    it('should collect `errors` from failed validation rules', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            rules: 'required|email',
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.validate()

      await flushPromises()

      expect(el.vm.errors.length).toBe(2)
    })
    
    it('should `error` as the first message from errors', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            rules: 'required|email',
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.validate()

      await flushPromises()

      expect(el.vm.error).toBe(el.vm.errors[0])
    })

    // Methods
    it('should not `validate` if form validation is "false"', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            rules: 'required'
          }
        }
      })

      form.vm.disableValidation()

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.validated).toBe(false)

      el.vm.update('value')
      el.vm.validate()

      expect(el.vm.validated).toBe(false)
    })

    it('should not `validate` if element has no rules', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.validated).toBe(true)

      el.vm.validate()

      expect(el.vm.validated).toBe(true)
    })

    it('should `validate` & set `validated` "true"', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            rules: 'required'
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.invalid).toBe(false)
      expect(el.vm.validated).toBe(false)

      el.vm.validate()

      await flushPromises()

      expect(el.vm.invalid).toBe(true)
      expect(el.vm.validated).toBe(true)
    })

    it('should `resetValidators`', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            rules: 'required'
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.errors.length).toBe(0)

      el.vm.validate()

      expect(el.vm.errors.length).toBe(1)

      el.vm.resetValidators()

      expect(el.vm.errors.length).toBe(0)
    })

    it('should set `validated` "true" on `resetValidators` if has no rules', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.validated).toBe(true)

      el.vm.validate()

      expect(el.vm.validated).toBe(true)

      el.vm.resetValidators()

      expect(el.vm.validated).toBe(true)
    })

    it('should set `validated` false on `resetValidators` if has rules', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            rules: 'required'
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.validated).toBe(false)

      el.vm.validate()

      await flushPromises()

      expect(el.vm.validated).toBe(true)

      el.vm.resetValidators()

      expect(el.vm.validated).toBe(false)
    })

    it('should `dirt`', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.dirt()
      
      expect(el.vm.dirty).toBe(true)
    })

    it('should `clean`', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      el.vm.dirt()
      
      expect(el.vm.dirty).toBe(true)

      el.vm.clean()

      expect(el.vm.dirty).toBe(false)
    })

    // Hooks
    it('should init `messageBag`', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.messageBag instanceof el.vm.$laraform.services.messageBag).toBe(true)
    })

    it('should init `Validators`', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            rules: 'required|email'
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.Validators.length).toBe(2)
      expect(el.vm.Validators[0] instanceof Validator).toBe(true)
      expect(el.vm.Validators[1] instanceof Validator).toBe(true)
      expect(el.vm.Validators[0].name).toBe('required')
      expect(el.vm.Validators[1].name).toBe('email')
    })

    // Watchers
    it('should dirt when value changes', async () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.dirty).toBe(false)

      el.vm.value = 'value'

      await nextTick()

      expect(el.vm.dirty).toBe(true)
    })
  }
}