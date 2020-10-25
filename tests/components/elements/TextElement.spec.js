import features from './../../features'
import elements from './../../../api/elements'
import { createForm, findAllComponents } from 'test-helpers'
import { nextTick } from 'vue'

describe('Text Element Features', () => {
  const options = {}

  _.each(elements.text.features, (feature) => {
    if (!features[feature]) {
      return
    }

    describe(`${_.upperFirst(feature)} feature`, features[feature]('text', options[feature] || {}))
  })

  describe('Classes feature', () => {
    it('should set default `input` class on `input`', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
          }
        }
      })

      let el = findAllComponents(form, { name: 'TextElement' }).at(0)

      expect(el.find('input').classes(el.vm.defaultClasses.input)).toBe(true)
    })

    it('should set default `inputContainer` class on field wrapper if it has addon', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
            addons: {
              before: '$'
            }
          }
        }
      })

      let el = findAllComponents(form, { name: 'TextElement' }).at(0)

      expect(el.find('input').element.parentElement.className.split(' ').indexOf(el.vm.defaultClasses.inputContainer) !== -1).toBe(true)
    })

    it('should not set default `inputContainer` class on field wrapper if it does not have addon', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
          }
        }
      })

      let el = findAllComponents(form, { name: 'TextElement' }).at(0)

      expect(el.find('input').element.parentElement.className.split(' ').indexOf(el.vm.defaultClasses.inputContainer) === -1).toBe(true)
    })
  })

  describe('Disabled feature', () => {
    it('should disable input when `disabled`', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
            disabled: true
          }
        }
      })

      let el = findAllComponents(form, { name: 'TextElement' }).at(0)

      expect(el.get('input').attributes('disabled')).toBeTruthy()
    })
    
    it('should not disable input when not `disabled`', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
            disabled: false
          }
        }
      })

      let el = findAllComponents(form, { name: 'TextElement' }).at(0)

      expect(el.get('input').attributes('disabled')).toBeFalsy()
    })
  })

  describe('HandleKeyup feature', () => {
    it('should trigger `handleKeyup` on input\'s "keyup" event', async () => {
      const onChangeMock = jest.fn()

      let form = createForm({
        schema: {
          el: {
            type: 'text',
            readonly: true,
            onChange: onChangeMock,
          }
        }
      })

      let el = findAllComponents(form, { name: 'TextElement' }).at(0)

      el.get('input').trigger('keyup')

      expect(onChangeMock).not.toHaveBeenCalled()

      el.vm.readonly = false

      el.get('input').trigger('keyup')

      expect(onChangeMock).toHaveBeenCalled()
    })

    it('should trigger `handleKeyup` on input\'s "select" event', async () => {
      const onChangeMock = jest.fn()

      let form = createForm({
        schema: {
          el: {
            type: 'text',
            readonly: true,
            onChange: onChangeMock,
          }
        }
      })

      let el = findAllComponents(form, { name: 'TextElement' }).at(0)

      el.get('input').trigger('select')

      expect(onChangeMock).not.toHaveBeenCalled()

      el.vm.readonly = false

      el.get('input').trigger('select')

      expect(onChangeMock).toHaveBeenCalled()
    })
  })

  describe('Id feature', () => {
    it('should render `id` attribute', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
            id: 'my-id'
          }
        }
      })

      let el = findAllComponents(form, { name: 'TextElement' }).at(0)

      expect(el.get('input').attributes('id')).toBe('my-id')
    })
  })

  describe('Placeholder feature', () => {
    it('should render `placeholder` attribute', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
            placeholder: 'Placeholder'
          }
        }
      })

      let el = findAllComponents(form, { name: 'TextElement' }).at(0)

      expect(el.get('input').attributes('placeholder')).toBe('Placeholder')
    })
  })

  describe('Readonly feature', () => {
    it('should render `readonly` attribute', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
            readonly: true
          }
        }
      })

      let el = findAllComponents(form, { name: 'TextElement' }).at(0)

      expect(el.get('input').attributes('readonly')).toBeTruthy()
    })
  })

})