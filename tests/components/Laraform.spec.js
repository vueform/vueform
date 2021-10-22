import _ from 'lodash'
import { findAllComponents, createElement } from 'test-helpers'
import { ref, markRaw, nextTick } from 'composition-api'
import flushPromises from 'flush-promises'
import defaultTheme from './../../src/themes/default'
import bootstrap from './../../src/themes/default'
import { mergeComponentClasses, mergeClass } from './../../src/utils/mergeClasses'
import fs from 'fs'

jest.useFakeTimers()

const files = fs.readdirSync(__dirname + '/laraform')
const exclude = ['.DS_Store']
const tests = {}

_.each(files, (file) => {
  if (exclude.indexOf(file) !== -1 || file.substr(0,1) === '_') {
    return
  }

  let t = file.replace('.js', '')

  tests[t] = require('./laraform/' + t).default
})

describe('Laraform', () => {
  describe('schema', () => {
    let schema = { el: { type: 'text', } }

    tests.schema({ schema }, { }, 'Options API')
    tests.schema({}, {setup: () => ({ laraform: ref({ schema, }) })}, 'Composition API')
    tests.schema({}, { propsData: { schema }}, ':form prop', )

    it('should have {} as default', () => {
      let form = createForm({})

      expect(form.vm.options.schema).toStrictEqual({})
    })

    it('should merge deep Options API schema to :form prop schema', () => {
      let form = createForm({
        schema: {
          el: {
            schema: {
              child: {
                label: 'Child',
                placeholder: 'Child',
              }
            }
          }
        }
      }, {
        propsData: {
          schema: {
            el: {
              type: 'object',
              schema: {
                child: {
                  type: 'text',
                  placeholder: 'Not child'
                }
              }
            }
          }
        }
      })

      expect(form.vm.options.schema).toStrictEqual({
        el: {
          type: 'object',
          schema: {
            child: {
              type: 'text',
              label: 'Child',
              placeholder: 'Child',
            }
          }
        }
      })
    })

    it('should merge deep Composition API schema to :form prop schema', () => {
      let form = createForm({}, {
        setup() {
          return {
            laraform: {
              schema: ref({
                el: {
                  schema: {
                    child: {
                      label: 'Child',
                      placeholder: 'Child',
                    }
                  }
                }
              })
            }
          }
        },
        propsData: {
          schema: {
            el: {
              type: 'object',
              schema: {
                child: {
                  type: 'text',
                  placeholder: 'Not child'
                }
              }
            }
          }
        }
      })

      expect(form.vm.options.schema).toStrictEqual({
        el: {
          type: 'object',
          schema: {
            child: {
              type: 'text',
              label: 'Child',
              placeholder: 'Child',
            }
          }
        }
      })
    })
  })

  describe('tabs', () => {
    let tabs = {
      first: { label: 'First', elements: ['el'], },
      second: { label: 'Second', elements: ['el2'] },
    }

    let schema = {
      el: { type: 'text', },
      el2: { type: 'text', },
      el3: { type: 'text', },
    }

    tests.tabs({ tabs, schema }, {}, 'Options API')
    tests.tabs({}, {setup: () => ({ laraform:ref({schema, tabs}) })}, 'Composition API')
    tests.tabs({}, { propsData: { tabs, schema }}, ':form prop', )

    it('should have {} as default', () => {
      let form = createForm({})

      expect(form.vm.options.tabs).toStrictEqual({})
    })

    it('should merge deep Options API schema to :form prop schema', () => {
      let form = createForm({
        tabs: { first: { label: 'First', buttons: { previous: true } } },
        schema: { el: { type: 'text' }, }
      }, {
        propsData: {
          tabs: { first: { label: 'Not first', elements: ['el'], buttons: { previous: false, next: true } } },
        }
      })

      expect(form.vm.options.tabs).toStrictEqual({
        first: {
          label: 'First',
          elements: ['el'],
          buttons: { previous: true, next: true }
        }
      })
    })

    it('should merge deep Composition API schema to :form prop schema', () => {
      let form = createForm({}, {
        setup(props, context) {
          return {
            laraform: {
              tabs: ref({ first: { label: 'First', buttons: { previous: true } } }),
              schema: ref({ el: { type: 'text' }, })
            }
          }
        },
        propsData: {
          tabs: { first: { label: 'Not first', elements: ['el'], buttons: { previous: false, next: true } } },
        }
      })

      expect(form.vm.options.tabs).toStrictEqual({
        first: {
          label: 'First',
          elements: ['el'],
          buttons: { previous: true, next: true }
        }
      })
    })
  })

  describe('steps', () => {
    let steps = {
      first: { label: 'First', elements: ['el'], },
      second: { label: 'Second', elements: ['el2'] },
    }

    let schema = {
      el: { type: 'text', },
      el2: { type: 'text', },
      el3: { type: 'text', },
    }

    tests.steps({ steps, schema }, {}, 'Options API')
    tests.steps({}, {setup: () => ({ laraform:ref({schema, steps}) })}, 'Composition API')
    tests.steps({}, { propsData: { steps, schema }}, ':form prop', )

    it('should have {} as default', () => {
      let form = createForm({})

      expect(form.vm.options.steps).toStrictEqual({})
    })

    it('should merge deep Options API schema to :form prop schema', () => {
      let form = createForm({
        steps: { first: { label: 'First', buttons: { previous: true } } },
        schema: { el: { type: 'text' }, }
      }, {
        propsData: {
          steps: { first: { label: 'Not first', elements: ['el'], buttons: { previous: false, next: true } } },
        }
      })

      expect(form.vm.options.steps).toStrictEqual({
        first: {
          label: 'First',
          elements: ['el'],
          buttons: { previous: true, next: true }
        }
      })
    })

    it('should merge deep Composition API schema to :form prop schema', () => {
      let form = createForm({}, {
        setup(props, context) {
          return {
            laraform: {
              steps: ref({ first: { label: 'First', buttons: { previous: true } } }),
              schema: ref({ el: { type: 'text' }, })
            }
          }
        },
        propsData: {
          steps: { first: { label: 'Not first', elements: ['el'], buttons: { previous: false, next: true } } },
        }
      })

      expect(form.vm.options.steps).toStrictEqual({
        first: {
          label: 'First',
          elements: ['el'],
          buttons: { previous: true, next: true }
        }
      })
    })
  })

  let form = createForm({})

  let config = form.vm.$laraform.config

  const overrides = {
    columns: [config.columns, { container: 9, label: 3, wrapper: 9 }, { container: 12, label: 12, wrapper: 12 }],
    languages: [config.languages, { en: { code: 'en', label: 'English' }, de: { code: 'de', label: 'German' } }, { it: { code: 'it', label: 'Italian' } }],
    language: [config.language, 'de', 'it'],
    theme: [config.theme, 'bootstrap', 'default'],
    endpoint: [config.endpoints.process, '/my/process', '/not/my/process'],
    method: [config.methods.process, 'GET', 'PUT'],
    validateOn: [config.validateOn, 'submit', 'step'],
    displayErrors: [config.displayErrors, false, true],
    labels: [config.labels, true, false],
    replaceClasses: [{}, { TextElement: { container: 'text' } }, { TextareaElement: { container: 'textarea' } }],
    extendClasses: [{}, { TextElement: { container: 'text' } }, { TextareaElement: { container: 'textarea' } }],
    components: [{}, { FormButton: {} }, { FormButton: {name:'NotFormButton'} }],
    elements: [{}, { TextElement: {} }, { TextElement: {name:'NotTextElement'} }],
    messages: [{}, { required: 'Required' }, { required: 'Not required' }],
    default: [{}, { el: 1 }, { el: 2 }],
    addClass: [null, 'form-class', 'not-form-class'],
    formKey: [null, '1234', '12345'],
    formatLoad: [null, () => ({ el: 1 }), () => ({ el: 2 })],
    formatData: [null, () => ({ el: 1 }), () => ({ el: 2 })],
    prepare: [null, () => ({ el: 1 }), () => ({ el: 2 })],
    multilingual: [false, true, false],
    stepsControls: [true, false, true],
  }

  _.each(overrides, (values, key) => {
    describe(key, () => {
      tests[key]({[key]:values[1]}, { config: { themes: { bootstrap, default: defaultTheme }} }, 'Options API')
      tests[key]({}, { setup: () => ({ laraform: { [key]: values[1] } }), config: { themes: { bootstrap, default: defaultTheme }}}, 'Composition API')
      tests[key]({}, { propsData: { [key]: values[1] }, config: { themes: { bootstrap, default: defaultTheme }} }, ':form prop')

      it('should have correct default value', () => {
        let form = createForm({})

        expect(form.vm.options[key]).toStrictEqual(values[0])
      })

      it('should have local definition preference over prop value when using Options API', () => {
        let form = createForm({
          [key]: values[1]
        }, {
          config: { themes: { bootstrap, default: defaultTheme }},
          propsData: {
            [key]: values[2]
          }
        })

        expect(form.vm.options[key]).toStrictEqual(values[1])
      })

      it('should have local definition preference over prop value when using Composition API', () => {
        let form = createForm({}, {
          setup() {
            return {
              laraform: {
                [key]: values[1]
              }
            }
          },
          propsData: {
            [key]: values[2]
          },
          config: { themes: { bootstrap, default: defaultTheme }}
        })

        expect(form.vm.options[key]).toStrictEqual(values[1])
      })
    })
  })

  describe('events', () => {
    it('should have change, submit, success, error, language, reset, clear, fail events', () => {
      let form = createForm({})

      expect(form.vm.events).toStrictEqual([
        'change', 'submit', 'success', 'error',
        'language', 'reset', 'clear', 'fail'
      ])
    })
  })

  describe('events', () => {
    it('should have change, submit, success, error, language, reset, clear, fail events', () => {
      let form = createForm({})

      expect(form.vm.events).toStrictEqual([
        'change', 'submit', 'success', 'error',
        'language', 'reset', 'clear', 'fail'
      ])
    })
  })

  describe('on', () => {
    it('should subscribe to events with `on`', () => {
      let onChangeMock = jest.fn()

      let form = createForm({})

      form.vm.on('change', onChangeMock)

      form.vm.fire('change', 'el', 'child')

      expect(onChangeMock).toHaveBeenCalledWith('el', 'child')
    })
  })

  describe('off', () => {
    it('should unsubscribe from events with `off`', () => {
      let onChangeMock = jest.fn()

      let form = createForm({})

      form.vm.on('change', onChangeMock)
      form.vm.off('change')

      form.vm.fire('change', 'el', 'child')

      expect(onChangeMock).not.toHaveBeenCalled()
    })
  })

  describe('elements$', () => {
    it('should contain child elements when using schema', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text'
          },
          el2: {
            type: 'text'
          }
        }
      })

      let elWrapper = findAllComponents(form, { name: 'TextElement' }).at(0)
      let el2Wrapper = findAllComponents(form, { name: 'TextElement' }).at(1)
      
      expect(form.vm.elements$).toStrictEqual({
        el: elWrapper.vm,
        el2: el2Wrapper.vm,
      })
    })

    it('should contain child elements when using inline elements', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text'
          },
          el2: {
            type: 'text'
          }
        }
      }, {}, function(h) {
        return createElement(h, 'form', [
          createElement(h, 'div', [
            createElement(h, 'TextElement', {
              props: {
                name: 'el'
              }
            }),
            createElement(h, 'div', [
              createElement(h, 'TextElement', {
                props: {
                  name: 'el2'
                }
              })
            ])
          ])
        ])
      })

      let elWrapper = findAllComponents(form, { name: 'TextElement' }).at(0)
      let el2Wrapper = findAllComponents(form, { name: 'TextElement' }).at(1)

      await nextTick()
      
      expect(form.vm.elements$).toStrictEqual({
        el: elWrapper.vm,
        el2: el2Wrapper.vm,
      })
    })
  })

  describe('tabs$', () => {
    it('should contain FormTabs when using default template', async () => {
      let form = createForm({
        tabs: {
          first: {
            label: 'First',
            elements: ['el']
          },
          second: {
            label: 'Second',
            elements: ['el2']
          },
        },
        schema: {
          el: {
            type: 'text'
          },
          el2: {
            type: 'text'
          }
        }
      })

      let tabsWrapper = findAllComponents(form, { name: 'FormTabs' }).at(0)
      
      expect(form.vm.tabs$).toStrictEqual(tabsWrapper.vm)
    })

    it('should contain FormTabs when using custom template', async () => {
      let form = createForm({
        tabs: {
          first: {
            label: 'First',
            elements: ['el']
          },
          second: {
            label: 'Second',
            elements: ['el2']
          },
        },
        schema: {
          el: {
            type: 'text'
          },
          el2: {
            type: 'text'
          }
        }
      }, {}, function(h) {
        return createElement(h, 'form', [
          createElement(h, 'div', [
            createElement(h, 'FormTabs', {})
          ]),
          createElement(h, 'TextElement', {
            props: {
              name: 'el'
            }
          }),
          createElement(h, 'TextElement', {
            props: {
              name: 'el2'
            }
          }),
        ])
      })

      let tabsWrapper = findAllComponents(form, { name: 'FormTabs' }).at(0)
      
      expect(form.vm.tabs$).toStrictEqual(tabsWrapper.vm)
    })
  })

  describe('steps$', () => {
    it('should contain FormSteps when using default template', async () => {
      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['el']
          },
          second: {
            label: 'Second',
            elements: ['el2']
          },
        },
        schema: {
          el: {
            type: 'text'
          },
          el2: {
            type: 'text'
          }
        }
      })

      let stepsWrapper = findAllComponents(form, { name: 'FormSteps' }).at(0)
      
      expect(form.vm.steps$).toStrictEqual(stepsWrapper.vm)
    })

    it('should contain FormSteps when using custom template', async () => {
      let form = createForm({
        steps: {
          first: {
            label: 'First',
            elements: ['el']
          },
          second: {
            label: 'Second',
            elements: ['el2']
          },
        },
        schema: {
          el: {
            type: 'text'
          },
          el2: {
            type: 'text'
          }
        }
      }, {}, function(h) {
        return createElement(h, 'form', [
          createElement(h, 'div', [
            createElement(h, 'FormSteps', {})
          ]),
          createElement(h, 'TextElement', {
            props: {
              name: 'el'
            }
          }),
          createElement(h, 'TextElement', {
            props: {
              name: 'el2'
            }
          }),
        ])
      })

      let stepsWrapper = findAllComponents(form, { name: 'FormSteps' }).at(0)
      
      expect(form.vm.steps$).toStrictEqual(stepsWrapper.vm)
    })
  })

  describe('validation', () => {
    it('should be true be default', async () => {
      let form = createForm({})
      
      expect(form.vm.validation).toBe(true)
    })
  })

  describe('submitting', () => {
    it('should be false be default', async () => {
      let form = createForm({})
      
      expect(form.vm.submitting).toBe(false)
    })
  })

  describe('preparing', () => {
    it('should be false be default', async () => {
      let form = createForm({})
      
      expect(form.vm.preparing).toBe(false)
    })
  })

  describe('updating', () => {
    it('should be false be default', async () => {
      let form = createForm({})
      
      expect(form.vm.updating).toBe(false)
    })
  })

  describe('data', () => {
    it('should collect data from children', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text', default: 'value' },
          el2: { type: 'text', default: 'value2', conditions: [['el', 'not-value']] },
        }
      })
      
      expect(form.vm.data).toStrictEqual({el:'value',el2:'value2'})
    })
  })

  describe('data', () => {
    it('should collect data from children', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text', default: 'value' },
          el2: { type: 'text', default: 'value2', conditions: [['el', 'not-value']] },
        }
      })
      
      expect(form.vm.requestData).toStrictEqual({el:'value'})
    })
  })

  describe('formData', () => {
    it('should transform data to FormData with key and data props', async () => {
      let form = createForm({
        formKey: '1234',
        schema: {
          el: { type: 'text', default: 'value' },
          el2: { type: 'text', default: 'value2' },
        }
      })

      let formData = new FormData()
      formData.append('formKey', '1234')
      formData.append('data[el]', 'value')
      formData.append('data[el2]', 'value2')
      
      expect(form.vm.formData).toStrictEqual(formData)
    })
  })

  describe('dirty', () => {
    it('should be dirty if any of the available elements is dirty', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text', default: 'value' },
          el2: { type: 'text', default: 'value2', conditions: [['el', 'not-value']] },
        }
      })
      
      let el = form.vm.el$('el')
      let el2 = form.vm.el$('el2')

      el2.state.dirty = true
      
      expect(form.vm.dirty).toBe(false)

      el.state.dirty = true
      
      expect(form.vm.dirty).toBe(true)
    })
  })

  describe('invalid', () => {
    it('should be invalid if any of the available elements is invalid', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text', rules: 'required' },
          el2: { type: 'text', rules: 'required', conditions: [['el', 'not-value']] },
        }
      })
      
      let el = form.vm.el$('el')
      let el2 = form.vm.el$('el2')

      el2.validate()
      await flushPromises()
      
      expect(form.vm.invalid).toBe(false)

      el.validate()
      await flushPromises()
      
      expect(form.vm.invalid).toBe(true)
    })
  })

  describe('debouncing', () => {
    it('should be invalid if any of the available elements is invalid', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text', rules: 'required', debounce: 1000 },
          el2: { type: 'text', rules: 'required', debounce: 1000, conditions: [['el', 'not-value']] },
        }
      })
      
      let el = form.vm.el$('el')
      let el2 = form.vm.el$('el2')

      el2.validate()
      
      expect(form.vm.debouncing).toBe(false)

      el.validate()
      
      expect(form.vm.debouncing).toBe(true)

      jest.runAllTimers()

      expect(form.vm.debouncing).toBe(false)

      await flushPromises()
    })
  })

  describe('pending', () => {
    it('should be invalid if any of the available elements is invalid', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text', rules: 'unique' },
          el2: { type: 'text', rules: 'unique', conditions: [['el', 'not-value']] },
        }
      })

      form.vm.$laraform.services.axios.post = () => ({ data: {} })
      
      let el = form.vm.el$('el')
      let el2 = form.vm.el$('el2')

      el2.validate()
      
      expect(form.vm.pending).toBe(false)

      el.validate()
      
      expect(form.vm.pending).toBe(true)

      await flushPromises()

      expect(form.vm.pending).toBe(false)
    })
  })

  describe('validated', () => {
    it('should be validated if all of the available elements are validated', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text', rules: 'required' },
          el2: { type: 'text', rules: 'required', conditions: [['el', 'not-value']] },
        }
      })

      form.vm.$laraform.services.axios.post = () => ({ data: {} })
      
      let el = form.vm.el$('el')

      expect(form.vm.validated).toBe(false)

      el.state.validated = true
      
      expect(form.vm.validated).toBe(true)
    })
  })

  describe('busy', () => {
    it('should be busy if any of the available elements is busy', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text', rules: 'unique' },
          el2: { type: 'text', rules: 'unique', conditions: [['el', 'not-value']] },
        }
      })

      form.vm.$laraform.services.axios.post = () => ({ data: {} })
      
      let el = form.vm.el$('el')
      let el2 = form.vm.el$('el2')

      el2.validate()
      
      expect(form.vm.busy).toBe(false)

      el.validate()
      
      expect(form.vm.busy).toBe(true)

      await flushPromises()

      expect(form.vm.busy).toBe(false)
    })

    it('should be busy when submitting', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text' },
        }
      })
      
      form.vm.submitting = true

      expect(form.vm.busy).toBe(true)

      form.vm.submitting = false

      expect(form.vm.busy).toBe(false)
    })

    it('should be busy when preparing', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text' },
        }
      })
      
      form.vm.preparing = true

      expect(form.vm.busy).toBe(true)

      form.vm.preparing = false

      expect(form.vm.busy).toBe(false)
    })
  })

  describe('formErrors', () => {
    it('should return errors from available elements + prepended and appended errors', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text', rules: 'required' },
          el2: { type: 'text', rules: 'min:10', conditions: [['el', 'not-value']] },
          el3: { type: 'text', rules: 'email' },
        }
      })
      
      let el = form.vm.el$('el')
      let el2 = form.vm.el$('el2')
      let el3 = form.vm.el$('el3')
      
      form.vm.validate()

      await flushPromises()
      
      expect(form.vm.formErrors).toStrictEqual([
        el.Validators[0].message,
        el3.Validators[0].message,
      ])

      form.vm.messageBag.prepend('Error before')
      form.vm.messageBag.append('Error after')
      
      expect(form.vm.formErrors).toStrictEqual([
        'Error before',
        el.Validators[0].message,
        el3.Validators[0].message,
        'Error after',
      ])
    })
  })

  describe('hasErrors', () => {
    it('should true if has any errors', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text', rules: 'required' },
        }
      })
      
      let el = form.vm.el$('el')
      
      expect(form.vm.hasErrors).toBe(false)

      el.validate()

      await flushPromises()

      expect(form.vm.hasErrors).toBe(true)
    })
  })

  describe('formMessages', () => {
    it('should return prepended and appended messages', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text' },
        }
      })

      form.vm.messageBag.prepend('Message before', 'message')
      form.vm.messageBag.append('Message after', 'message')
      
      expect(form.vm.formMessages).toStrictEqual([
        'Message before',
        'Message after',
      ])
    })
  })

  describe('hasMessages', () => {
    it('should return true if has any message', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text' },
        }
      })

      expect(form.vm.hasMessages).toBe(false)

      form.vm.messageBag.prepend('Message before', 'message')
      
      expect(form.vm.hasMessages).toBe(true)
    })
  })

  describe('isDisabled', () => {
    it('should be disabled invalid and should validate on change', async () => {
      let form = createForm({
        validateOn: 'submit|change',
        schema: {
          el: { type: 'text', rules: 'required' },
        }
      })

      let el = form.vm.el$('el')
      
      el.validate()

      await flushPromises()

      expect(form.vm.isDisabled).toBe(true)
    })

    it('should not be disabled invalid and should not validate on change', async () => {
      let form = createForm({
        validateOn: 'submit',
        schema: {
          el: { type: 'text', rules: 'required' },
        }
      })

      let el = form.vm.el$('el')
      
      el.validate()

      await flushPromises()

      expect(form.vm.isDisabled).toBe(false)
    })

    it('should not be disabled when busy', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text' },
        }
      })

      form.vm.submitting = true

      expect(form.vm.isDisabled).toBe(true)

      form.vm.submitting = false

      expect(form.vm.isDisabled).toBe(false)
    })
  })

  describe('shouldValidateOnChange', () => {
    it('should be true if validateOn contains change', async () => {
      let form = createForm({
        validateOn: 'submit|change',
      })

      expect(form.vm.shouldValidateOnChange).toBe(true)

      form.vm.laraform.validateOn = 'submit'

      expect(form.vm.shouldValidateOnChange).toBe(false)
    })
  })

  describe('shouldValidateOnStep', () => {
    it('should be true if validateOn contains step', async () => {
      let form = createForm({
        validateOn: 'submit|step',
      })

      expect(form.vm.shouldValidateOnStep).toBe(true)

      form.vm.laraform.validateOn = 'submit'

      expect(form.vm.shouldValidateOnStep).toBe(false)
    })
  })

  describe('hasSteps', () => {
    it('should be false if steps is not defined', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text' }
        }
      })

      expect(form.vm.hasSteps).toBe(false)
    })

    it('should be true if steps is defined', async () => {
      let form = createForm({
        steps: {
          first: { elements: ['el'] }
        },
        schema: {
          el: { type: 'text' }
        }
      })

      expect(form.vm.hasSteps).toBe(true)
    })
  })

  describe('hasTabs', () => {
    it('should be false if tabs is not defined', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text' }
        }
      })

      expect(form.vm.hasTabs).toBe(false)
    })

    it('should be true if tabs is defined', async () => {
      let form = createForm({
        tabs: {
          first: { elements: ['el'] }
        },
        schema: {
          el: { type: 'text' }
        }
      })

      expect(form.vm.hasTabs).toBe(true)
    })
  })

  describe('mainClass', () => {
    it('should be equal to first classname of defaultClasses', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text' }
        }
      })

      expect(form.vm.mainClass).toBe(_.keys(form.vm.defaultClasses)[0])
    })
  })

  describe('defaultClasses', () => {
    it('should be equal to theme\'s Laraform component\'s defaultClasses', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text' }
        }
      })

      expect(form.vm.defaultClasses).toStrictEqual(form.vm.extendedTheme.templates.Laraform.data().defaultClasses)
    })
  })

  describe('extendedClasses', () => {
    let defaultClasses = defaultTheme.templates.Laraform.data().defaultClasses
    let mainClass = _.keys(defaultClasses)[0]

    it('should equal to defaultClasses by default', async () => {
      let form = createForm({})

      expect(form.vm.extendedClasses).toStrictEqual(form.vm.defaultClasses)
    })

    it('should have classes in theme overwrite defaultClasses', async () => {
      let overwriteClasses1 = {
        [mainClass]: 'theme-overwrite-class'
      }

      let form = createForm({}, {
        themes: {
          default: Object.assign({}, defaultTheme, {
            classes: {
              Laraform: overwriteClasses1
            }
          })
        }
      })

      expect(form.vm.extendedClasses).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses1))
    })

    // Form classes
    it('should have classes in form overwrite defaultClasses, even when changes using Options API', async () => {
      let overwriteClasses1 = {
        [mainClass]: 'form-overwrite-class'
      }
      let overwriteClasses2 = {
        [mainClass]: 'form-overwrite-class2'
      }

      let form = createForm({
        replaceClasses: {
          Laraform: overwriteClasses1
        }
      })

      expect(form.vm.extendedClasses).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses1))

      form.vm.laraform.replaceClasses.Laraform = overwriteClasses2

      expect(form.vm.extendedClasses).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses2))
    })

    it('should have classes in form overwrite defaultClasses, even when changes using Composition API', async () => {
      let overwriteClasses1 = {
        [mainClass]: 'form-overwrite-class'
      }
      let overwriteClasses2 = {
        [mainClass]: 'form-overwrite-class2'
      }

      let form = createForm({}, {
        setup() {
          return {
            laraform: {
              replaceClasses: ref({
                Laraform: overwriteClasses1
              })
            }
          }
        }
      })

      await nextTick()

      expect(form.vm.extendedClasses).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses1))

      form.vm.options.replaceClasses.Laraform = overwriteClasses2

      expect(form.vm.extendedClasses).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses2))
    })

    it('should have classes in form overwrite defaultClasses, even when changes using :form prop', async () => {
      let overwriteClasses1 = {
        [mainClass]: 'form-overwrite-class'
      }
      let overwriteClasses2 = {
        [mainClass]: 'form-overwrite-class2'
      }

      let form = createForm({}, {
        propsData: {
          replaceClasses: {
            Laraform: overwriteClasses1
          }
        }
      })

      expect(form.vm.extendedClasses).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses1))

      form.vm.options.replaceClasses.Laraform = overwriteClasses2

      expect(form.vm.extendedClasses).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses2))
    })

    it('should have classes in form overwrite theme classes, even when changes', async () => {
      let overwriteClasses1 = {
        [mainClass]: 'form-overwrite-class'
      }
      let overwriteClasses2 = {
        [mainClass]: 'form-overwrite-class2'
      }

      let form = createForm({
        replaceClasses: {
          Laraform: overwriteClasses1
        }
      }, {
        themes: {
          default: Object.assign({}, defaultTheme, {
            classes: {
              Laraform: {
                [mainClass]: 'theme-overwrite-class'
              }
            }
          })
        }
      })

      expect(form.vm.extendedClasses).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses1))

      form.vm.options.replaceClasses.Laraform = overwriteClasses2

      expect(form.vm.extendedClasses).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses2))
    })

    it('should have extendClasses in form add classes, even when changes using Options API', async () => {
      let extendClasses1 = {
        [mainClass]: 'form-add-class'
      }
      let extendClasses2 = {
        [mainClass]: 'form-add-class2'
      }

      let form = createForm({
        extendClasses: {
          Laraform: extendClasses1
        }
      })

      expect(form.vm.extendedClasses[mainClass]).toStrictEqual(mergeClass(defaultClasses[mainClass], extendClasses1[mainClass]))

      form.vm.options.extendClasses.Laraform = extendClasses2

      expect(form.vm.extendedClasses[mainClass]).toStrictEqual(mergeClass(defaultClasses[mainClass], extendClasses2[mainClass]))
    })

    it('should have extendClasses in form add classes, even when changes using Composition API', async () => {
      let extendClasses1 = {
        [mainClass]: 'form-add-class'
      }
      let extendClasses2 = {
        [mainClass]: 'form-add-class2'
      }

      let form = createForm({}, {
        setup() {
          return {
            laraform: {
              extendClasses: ref({
                Laraform: extendClasses1
              })
            }
          }
        }
      })

      expect(form.vm.extendedClasses[mainClass]).toStrictEqual(mergeClass(defaultClasses[mainClass], extendClasses1[mainClass]))

      form.vm.options.extendClasses.Laraform = extendClasses2

      expect(form.vm.extendedClasses[mainClass]).toStrictEqual(mergeClass(defaultClasses[mainClass], extendClasses2[mainClass]))
    })

    it('should have extendClasses in form add classes, even when changes using :form prop', async () => {
      let extendClasses1 = {
        [mainClass]: 'form-add-class'
      }
      let extendClasses2 = {
        [mainClass]: 'form-add-class2'
      }

      let form = createForm({}, {
        propsData: {
          extendClasses: {
            Laraform: extendClasses1
          }
        }
      })

      expect(form.vm.extendedClasses[mainClass]).toStrictEqual(mergeClass(defaultClasses[mainClass], extendClasses1[mainClass]))

      form.vm.options.extendClasses.Laraform = extendClasses2

      expect(form.vm.extendedClasses[mainClass]).toStrictEqual(mergeClass(defaultClasses[mainClass], extendClasses2[mainClass]))
    })

    it('should have class add classes, even when changes', async () => {
      let class1 = 'form-class'

      let class2 = ['form-class2-a', 'form-class2-b']

      let form = createForm({
        addClass: class1
      })

      expect(form.vm.extendedClasses).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses), { [mainClass]: class1 }))

      form.vm.$set(form.vm.laraform, 'addClass', class2)

      expect(form.vm.extendedClasses).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses), { [mainClass]: class2 }))
    })

    it('should have class add classes, even when changes using Composition API', async () => {
      let class1 = 'form-class'

      let class2 = ['form-class2-a', 'form-class2-b']

      let form = createForm({}, {
        setup() {
          return {
            laraform: ref({
              addClass: class1
            })
          }
        }
      })

      expect(form.vm.extendedClasses).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses), { [mainClass]: class1 }))

      form.vm.$set(form.vm.laraform, 'addClass', class2)

      expect(form.vm.extendedClasses).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses), { [mainClass]: class2 }))
    })

    it('should have class add classes when using :form prop', async () => {
      let class1 = 'form-class'

      let class2 = ['form-class2-a', 'form-class2-b']

      let form = createForm({}, {
        propsData: {
          addClass: class1,
        }
      })

      expect(form.vm.extendedClasses).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses), { [mainClass]: class1 }))
    })

    // Rendering
    it('should mainClass to the container DOM', async () => {
      let themeClasses = {
        Laraform: {
          [mainClass]: 'theme-classes'
        }
      }

      let form = createForm({
        replaceClasses: {
          Laraform: {
            [mainClass]: 'form-classes'
          }
        },
        addClass: 'form-class',
        extendClasses: {
          Laraform: {
            [mainClass]: 'form-add-classes'
          }
        },
      }, {
        themes: {
          default: Object.assign({}, defaultTheme, {
            classes: themeClasses
          })
        }
      })

      expect(form.classes('form-classes')).toBe(true)
      expect(form.classes('theme-classes')).toBe(false)
      expect(form.classes('form-add-classes')).toBe(true)
      expect(form.classes('form-class')).toBe(true)
    })
  })

  describe('extendedComponents', () => {
    it('should be equal to theme\'s components and elements', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text' }
        }
      })

      expect(form.vm.extendedComponents).toStrictEqual(Object.assign({}, form.vm.extendedTheme.templates, form.vm.extendedTheme.templates))
    })
  })

  describe('selectedTheme', () => {
    it('should be equal to config value by default', async () => {
      let form = createForm({}, {
        config: {
          theme: 'bootstrap'
        },
        themes: {
          default: defaultTheme,
          bootstrap,
        }
      })

      expect(form.vm.selectedTheme).toStrictEqual(bootstrap)
    })

    it('should be equal to prop theme value when also defined with Options API', async () => {
      let form = createForm({
        theme: 'default'
      }, {
        propsData: {
          theme: 'not-default'
        },
        config: {
          theme: 'bootstrap'
        },
        themes: {
          default: defaultTheme,
          bootstrap,
        }
      })

      expect(form.vm.selectedTheme).toStrictEqual(defaultTheme)
    })

    it('should be equal to prop theme value when also defined with Composition API', async () => {
      let form = createForm({}, {
        setup() {
          return {
            laraform: {
              theme: 'default'
            }
          }
        },
        propsData: {
          theme: 'not-default'
        },
        config: {
          theme: 'default'
        },
        themes: {
          default: defaultTheme,
          bootstrap,
        }
      })

      expect(form.vm.selectedTheme).toStrictEqual(defaultTheme)
    })

    it('should be equal to :form prop theme value when defined', async () => {
      let form = createForm({}, {
        propsData: {
          theme: 'default'
        },
        config: {
          theme: 'bootstrap'
        },
        themes: {
          default: defaultTheme,
          bootstrap,
        }
      })

      expect(form.vm.selectedTheme).toStrictEqual(defaultTheme)
    })
  })

  describe('extendedTheme', () => {
    it('should merge theme elements, with global elements and local elements', async () => {
      let form = createForm({
        elements: {
          SelectElement: markRaw({name:'FormSelectElement'}),
          TextareaElement: markRaw({name:'FormTextareaElement'}),
        }
      }, {
        config: {
          elements: {
            SelectElement: markRaw({name:'ConfigSelectElement'}),
            TextElement: markRaw({name:'ConfigTextElement'}),
          }
        }
      })

      expect(form.vm.extendedTheme.templates.SelectElement.name).toBe('FormSelectElement')
      expect(form.vm.extendedTheme.templates.TextareaElement.name).toBe('FormTextareaElement')
      expect(form.vm.extendedTheme.templates.TextElement.name).toBe('ConfigTextElement')
    })

    it('should merge theme components, with global components and local components', async () => {
      let form = createForm({
        elements: {
          ElementText: markRaw({name:'FormElementText'}),
          FormButton: markRaw({name:'FormFormButton'}),
        }
      }, {
        config: {
          elements: {
            ElementText: markRaw({name:'ConfigElementText'}),
            FormTab: markRaw({name:'ConfigFormTab'}),
          }
        }
      })

      expect(form.vm.extendedTheme.templates.FormButton.name).toBe('FormFormButton')
      expect(form.vm.extendedTheme.templates.ElementText.name).toBe('FormElementText')
      expect(form.vm.extendedTheme.templates.FormTab.name).toBe('ConfigFormTab')
    })

    it('should merge deep theme classes with local classes', async () => {
      let form = createForm({
        replaceClasses: {
          Laraform: {
            form: 'form-form',
            buttons: 'form-button',
          },
          ElementLabel: {
            container: 'form-label',
          },
        }
      }, {
        config: {
          themes: {
            default: Object.assign({}, defaultTheme, {
              classes: {
                Laraform: {
                  form: 'theme-form',
                  label: 'theme-label',
                },
                ElementText: {
                  container: 'theme-element-text',
                },
              }
            })
          }
        }
      })

      expect(form.vm.extendedTheme.classes.Laraform).toStrictEqual({
        form: 'form-form',
        buttons: 'form-button',
        label: 'theme-label',
      })

      expect(form.vm.extendedTheme.classes.ElementLabel.container).toStrictEqual('form-label')
      expect(form.vm.extendedTheme.classes.ElementText.container).toStrictEqual('theme-element-text')
    })
  })

  describe('update', () => {
    it('should update children', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text' },
          el2: { type: 'text' },
        }
      })

      form.vm.update({
        el: 'value',
        el2: 'value2',
      })

      await flushPromises()

      expect(form.vm.data).toStrictEqual({
        el: 'value',
        el2: 'value2',
      })

      expect(form.vm.el$('el').dirty).toBe(true)
    })
  })

  describe('load', () => {
    it('should load to children without formatting by default', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text' },
          el2: { type: 'text' },
          group: {
            type: 'group',
            schema: {
              child: {
                type: 'text'
              }
            }
          }
        },
        formatLoad(data) {
          return {
            el: data.el + '-formatted',
            el2: data.el2 + '-formatted',
            child: data.child + '-formatted',
          }
        }
      })

      form.vm.load({
        el: 'value',
        el2: 'value2',
        child: 'value-child',
      })

      await flushPromises()

      expect(form.vm.data).toStrictEqual({
        el: 'value',
        el2: 'value2',
        child: 'value-child',
      })
    })

    it('should load to children with formatting if true using Options API', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text' },
          el2: { type: 'text' },
          group: {
            type: 'group',
            schema: {
              child: {
                type: 'text'
              }
            }
          }
        },
        formatLoad(data) {
          return {
            el: data.el + '-formatted',
            el2: data.el2 + '-formatted',
            child: data.child + '-formatted',
          }
        }
      })

      form.vm.load({
        el: 'value',
        el2: 'value2',
        child: 'value-child',
      }, true)

      await flushPromises()

      expect(form.vm.data).toStrictEqual({
        el: 'value-formatted',
        el2: 'value2-formatted',
        child: 'value-child-formatted',
      })
    })

    it('should load to children with formatting if true using Composition API', async () => {
      let form = createForm({}, {
        setup() {
          return {
            laraform: {
              schema: {
                el: { type: 'text' },
                el2: { type: 'text' },
                group: {
                  type: 'group',
                  schema: {
                    child: {
                      type: 'text'
                    }
                  }
                },
              },
              formatLoad: (data) => {
                return {
                  el: data.el + '-formatted',
                  el2: data.el2 + '-formatted',
                  child: data.child + '-formatted',
                }
              }
            }
          }
        }
      })

      form.vm.load({
        el: 'value',
        el2: 'value2',
        child: 'value-child',
      }, true)

      await flushPromises()

      expect(form.vm.data).toStrictEqual({
        el: 'value-formatted',
        el2: 'value2-formatted',
        child: 'value-child-formatted',
      })
    })

    it('should load to children with formatting if true using :form prop', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text' },
          el2: { type: 'text' },
          group: {
            type: 'group',
            schema: {
              child: {
                type: 'text'
              }
            }
          }
        }
      }, {
        propsData: {
          formatLoad(data) {
            return {
              el: data.el + '-formatted',
              el2: data.el2 + '-formatted',
              child: data.child + '-formatted',
            }
          }
        }
      })

      form.vm.load({
        el: 'value',
        el2: 'value2',
        child: 'value-child',
      }, true)

      await flushPromises()

      expect(form.vm.data).toStrictEqual({
        el: 'value-formatted',
        el2: 'value2-formatted',
        child: 'value-child-formatted',
      })
    })

    it('should enable all steps steps on load', async () => {
      let form = createForm({
        steps: {
          first: {
            elements: ['el']
          },
          second: {
            elements: ['el2']
          },
        },
        schema: {
          el: { type: 'text' },
          el2: { type: 'text' },
        },
      })

      form.vm.load({
        el: 'value',
        el2: 'value2',
      })

      await nextTick()

      expect(form.vm.steps$.steps$.first.isDisabled).toBe(false)
      expect(form.vm.steps$.steps$.second.isDisabled).toBe(false)
    })
  })

  describe('reset', () => {
    it('should reset children', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text', default: 'default' },
          el2: { type: 'text' },
        }
      })

      form.vm.load({
        el: 'value',
        el2: 'value2',
      })

      form.vm.reset()

      expect(form.vm.data).toStrictEqual({
        el: 'default',
        el2: null,
      })
    })

    it('should reset steps', async () => {
      let form = createForm({
        steps: {
          first: {
            elements: ['el']
          },
          second: {
            elements: ['el2']
          },
        },
        schema: {
          el: { type: 'text' },
          el2: { type: 'text' },
        }
      })

      await nextTick()

      form.vm.load({
        el: 'value',
        el2: 'value2',
      })

      await nextTick()

      expect(form.vm.steps$.steps$.first.isDisabled).toBe(false)
      expect(form.vm.steps$.steps$.second.isDisabled).toBe(false)

      form.vm.reset()

      await nextTick()

      expect(form.vm.steps$.steps$.first.isDisabled).toBe(false)
      expect(form.vm.steps$.steps$.second.isDisabled).toBe(true)
    })

    it('should reset tabs', async () => {
      let form = createForm({
        tabs: {
          first: {
            elements: ['el']
          },
          second: {
            elements: ['el2']
          },
        },
        schema: {
          el: { type: 'text' },
          el2: { type: 'text' },
        }
      })

      await nextTick()

      form.vm.tabs$.tabs$.second.select()

      expect(form.vm.tabs$.tabs$.first.active).toBe(false)
      expect(form.vm.tabs$.tabs$.second.active).toBe(true)

      form.vm.reset()

      await nextTick()

      expect(form.vm.tabs$.tabs$.first.active).toBe(true)
      expect(form.vm.tabs$.tabs$.second.active).toBe(false)
    })

    it('should fire reset event', async () => {
      let onResetMock = jest.fn()

      let form = createForm({
        schema: {
          el: { type: 'text' },
          el2: { type: 'text' },
        },
      })

      form.vm.on('reset', onResetMock)
      
      form.vm.reset()

      expect(onResetMock).toHaveBeenCalled()
    })
  })

  describe('clear', () => {
    it('should clear children', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text', default: 'default' },
          el2: { type: 'text' },
        }
      })

      form.vm.load({
        el: 'value',
        el2: 'value2',
      })

      form.vm.clear()

      expect(form.vm.data).toStrictEqual({
        el: null,
        el2: null,
      })
    })

    it('should clear steps', async () => {
      let form = createForm({
        steps: {
          first: {
            elements: ['el']
          },
          second: {
            elements: ['el2']
          },
        },
        schema: {
          el: { type: 'text' },
          el2: { type: 'text' },
        }
      })

      await nextTick()

      form.vm.load({
        el: 'value',
        el2: 'value2',
      })

      await nextTick()

      expect(form.vm.steps$.steps$.first.isDisabled).toBe(false)
      expect(form.vm.steps$.steps$.second.isDisabled).toBe(false)

      form.vm.clear()

      await nextTick()

      expect(form.vm.steps$.steps$.first.isDisabled).toBe(false)
      expect(form.vm.steps$.steps$.second.isDisabled).toBe(true)
    })

    it('should clear tabs', async () => {
      let form = createForm({
        tabs: {
          first: {
            elements: ['el']
          },
          second: {
            elements: ['el2']
          },
        },
        schema: {
          el: { type: 'text' },
          el2: { type: 'text' },
        }
      })

      await nextTick()

      form.vm.tabs$.tabs$.second.select()

      expect(form.vm.tabs$.tabs$.first.active).toBe(false)
      expect(form.vm.tabs$.tabs$.second.active).toBe(true)

      form.vm.clear()

      await nextTick()

      expect(form.vm.tabs$.tabs$.first.active).toBe(true)
      expect(form.vm.tabs$.tabs$.second.active).toBe(false)
    })

    it('should fire clear event', async () => {
      let onClearMock = jest.fn()

      let form = createForm({
        schema: {
          el: { type: 'text' },
          el2: { type: 'text' },
        },
      })

      form.vm.on('clear', onClearMock)
      
      form.vm.clear()

      expect(onClearMock).toHaveBeenCalled()
    })
  })

  describe('clean', () => {
    it('should clear children', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text' },
          el2: { type: 'text' },
        }
      })

      form.vm.update({
        el: 'value',
        el2: 'value2',
      })

      await flushPromises()

      expect(form.vm.dirty).toBe(true)

      form.vm.clean()

      expect(form.vm.dirty).toBe(false)
    })
  })

  describe('validate', () => {
    it('should validate children', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text', rules: 'required' },
        }
      })

      form.vm.validate()

      await flushPromises()

      expect(form.vm.validated).toBe(true)
    })

    it('should not validate if not invalid, validated and validates on change', async () => {
       let form = createForm({
        schema: {
          el: { type: 'text', rules: 'unique' },
        }
      })

      form.vm.$laraform.services.axios.post = () => ({ data: true })
      
      let el = form.vm.el$('el')

      el.validate()
      expect(form.vm.pending).toBe(true)
      await flushPromises()
      expect(form.vm.pending).toBe(false)
      expect(form.vm.validated).toBe(true)
      expect(form.vm.invalid).toBe(false)

      form.vm.validate()
      expect(form.vm.pending).toBe(false)
    })

    it('should validate if invalid, validated and does not validate on change', async () => {
       let form = createForm({
        validateOn: 'submit',
        schema: {
          el: { type: 'text', rules: 'unique' },
        }
      })

      form.vm.$laraform.services.axios.post = () => ({ data: false })
      
      let el = form.vm.el$('el')

      el.validate()
      expect(form.vm.pending).toBe(true)
      await flushPromises()
      expect(form.vm.pending).toBe(false)
      expect(form.vm.validated).toBe(true)
      expect(form.vm.invalid).toBe(true)

      form.vm.validate()
      expect(form.vm.pending).toBe(true)
      await flushPromises()
    })

    it('should not validate unavailable elements', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text', rules: 'required' },
          el2: { type: 'text', rules: 'required', conditions: [['el', 'value']] },
        }
      })
      
      form.vm.validate()

      await flushPromises()

      expect(form.vm.el$('el').validated).toBe(true)
      expect(form.vm.el$('el2').validated).toBe(false)
    })

    it('should not validate static elements', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text', rules: 'required' },
          buttons: { type: 'button', buttonLabel: 'Button' }
        }
      })
      
      form.vm.validate()

      await flushPromises()

      expect(form.vm.el$('el').validated).toBe(true)
    })

    it('should not validate validated elements if validates on change', async () => {
       let form = createForm({
        validateOn: 'change',
        schema: {
          el: { type: 'text', rules: 'unique' },
        }
      })

      form.vm.$laraform.services.axios.post = () => ({ data: false })
      
      let el = form.vm.el$('el')

      el.validate()
      expect(el.pending).toBe(true)
      await flushPromises()
      expect(el.pending).toBe(false)
      expect(el.validated).toBe(true)
      expect(el.invalid).toBe(true)

      form.vm.validate()
      expect(el.pending).toBe(false)
      await flushPromises()
    })

    it('should validate validated elements if does not validate on change', async () => {
       let form = createForm({
        validateOn: 'submit',
        schema: {
          el: { type: 'text', rules: 'unique' },
        }
      })

      form.vm.$laraform.services.axios.post = () => ({ data: false })
      
      let el = form.vm.el$('el')

      el.validate()
      expect(el.pending).toBe(true)
      await flushPromises()
      expect(el.pending).toBe(false)
      expect(el.validated).toBe(true)
      expect(el.invalid).toBe(true)

      form.vm.validate()
      expect(el.pending).toBe(true)
      await flushPromises()
    })

    it('should run all element validators', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text', rules: 'required|email', default: 'value' },
        }
      })

      form.vm.validate()

      await flushPromises()

      expect(form.vm.el$('el').validated).toBe(true)
      expect(form.vm.el$('el').invalid).toBe(true)
    })
  })

  describe('submit', () => {
    it('should return when disabled', async () => {
      let onSubmitMock = jest.fn()

      let form = createForm({
        schema: {
          el: { type: 'text' },
        }
      })

      form.vm.on('submit', onSubmitMock)

      form.vm.submitting = true

      form.vm.submit()

      expect(onSubmitMock).not.toHaveBeenCalled()
    })

    it('should return if invalid', async () => {
      let onSubmitMock = jest.fn()

      let form = createForm({
        schema: {
          el: { type: 'text', rules: 'required' },
        }
      })

      form.vm.on('submit', onSubmitMock)

      form.vm.submit()

      await flushPromises()

      expect(form.vm.invalid).toBe(true)
      expect(onSubmitMock).not.toHaveBeenCalled()
    })

    it('should set preparing', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
          },
        },
        prepare: async () => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(true)
            }, 1);
          })
        }
      })


      form.vm.$laraform.services.axios.post = () => ({ data: {} })

      form.vm.submit()

      await flushPromises()
      expect(form.vm.preparing).toBe(true)

      // prepareElements
      await flushPromises()
      // options.prepare timeout
      jest.advanceTimersByTime(1)
      // options.prepare await flush
      await flushPromises()

      expect(form.vm.preparing).toBe(false)
    })

    it('should prepare elements', async () => {
      let onSubmitMock = jest.fn()

      let form = createForm({
        validateOn: 'change',
        schema: {
          el: {
            type: 'file',
            auto: false,
          },
        }
      })

      let el = form.vm.el$('el')

      el.load(new File([''], 'filename.jpg'))

      form.vm.$laraform.services.axios.post = () => ({
        data: {
          tmp: 'tmp123',
          originalName: 'filename'
        },
      })

      expect(el.stage).toBe(1)

      form.vm.on('submit', onSubmitMock)

      form.vm.submit()

      await flushPromises()

      expect(el.stage).toBe(2)
      expect(onSubmitMock).toHaveBeenCalled()
    })

    it('should prepare form', async () => {
      let onSubmitMock = jest.fn()
      let prepareMock = jest.fn()

      let form = createForm({
        validateOn: 'change',
        schema: {
          el: {
            type: 'text',
          },
        },
        prepare() {
          prepareMock()
        }
      })


      form.vm.$laraform.services.axios.post = () => ({ data: {} })

      form.vm.on('submit', onSubmitMock)

      form.vm.submit()

      await flushPromises()

      expect(prepareMock).toHaveBeenCalled()
      expect(onSubmitMock).toHaveBeenCalled()
    })

    it('should fire error if preparing fails and set preparing false', async () => {
      let errorMock = jest.fn()

      let form = createForm({
        validateOn: 'change',
        schema: {
          el: {
            type: 'text',
          },
        },
        prepare: async () => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              reject()
            }, 1)
          })
        },
      })


      form.vm.$laraform.services.axios.post = () => ({ data: {} })

      form.vm.on('error', errorMock)

      form.vm.submit()

      await flushPromises()

      expect(form.vm.preparing).toBe(true)
    
      // prepareElements
      await flushPromises()
      // options.prepare timeout
      jest.advanceTimersByTime(1)
      // options.prepare await flush
      await flushPromises()

      expect(errorMock).toHaveBeenCalled()

      expect(form.vm.preparing).toBe(false)
    })

    it('should fire submit', async () => {
      let onSubmitMock = jest.fn()

      let form = createForm({
        schema: {
          el: { type: 'text' },
        }
      })

      form.vm.$laraform.services.axios.post = () => ({ data: {} })

      form.vm.on('submit', onSubmitMock)

      form.vm.submit()

      await flushPromises()

      expect(onSubmitMock).toHaveBeenCalled()
    })

    it('should call send', async () => {
      let postMock = jest.fn(() => ({ data: {} }))

      let form = createForm({
        validateOn: 'change',
        schema: {
          el: {
            type: 'text',
          },
        },
      })

      form.vm.$laraform.services.axios.post = postMock

      form.vm.submit()
    
      await flushPromises()

      expect(postMock).toHaveBeenCalled()
    })
  })

  describe('send', () => {
    it('should set submitting true and false after finish', async () => {
      let postMock = jest.fn(() => ({ data: {} }))

      let form = createForm({
        schema: {
          el: { type: 'text' },
        }
      })

      form.vm.$laraform.services.axios.post = postMock

      form.vm.send()

      expect(form.vm.submitting).toBe(true)

      await flushPromises()

      expect(form.vm.submitting).toBe(false)
    })

    it('should submit form data to endpoint', async () => {
      let postMock = jest.fn(() => ({ data: {} }))

      let form = createForm({
        endpoint: '/endpoint',
        schema: {
          el: { type: 'text', default: 'value' },
        }
      })

      form.vm.$laraform.services.axios.post = postMock

      form.vm.send()

      await flushPromises()

      expect(postMock).toHaveBeenCalledWith('/endpoint', form.vm.formData)
    })

    it('should update form with payload updates data', async () => {
      let postMock = jest.fn(() => ({ data: { payload: { updates: { el: 'not-value' }} } }))

      let form = createForm({
        schema: {
          el: { type: 'text', default: 'value' },
        }
      })

      form.vm.$laraform.services.axios.post = postMock

      form.vm.send()

      await flushPromises()

      expect(form.vm.data).toStrictEqual({
        el: 'not-value'
      })
    })

    it('should fire success with response', async () => {
      let postMock = jest.fn(() => ({ data: { this: 'that' } }))
      let successMock = jest.fn()

      let form = createForm({
        schema: {
          el: { type: 'text', default: 'value' },
        }
      })

      form.vm.on('success', successMock)

      form.vm.$laraform.services.axios.post = postMock

      form.vm.send()

      await flushPromises()

      expect(successMock).toHaveBeenCalledWith({ data: { this: 'that' }})
    })

    it('should fire fail when fails and set submitting false', async () => {
      let postMock = jest.fn(() => (() => { }))
      let failMock = jest.fn()

      let form = createForm({
        schema: {
          el: { type: 'text', default: 'value' },
        }
      })

      form.vm.on('fail', failMock)

      form.vm.$laraform.services.axios.post = postMock

      form.vm.send()

      await flushPromises()

      expect(failMock).toHaveBeenCalled()
      expect(form.vm.submitting).toBe(false)
    })
  })

  describe('disableValidation', () => {
    it('should disable validation', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text' },
        }
      })

      form.vm.disableValidation()

      expect(form.vm.validation).toBe(false)
    })
  })

  describe('enableValidation', () => {
    it('should enable validation', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text' },
        }
      })

      form.vm.disableValidation()
      form.vm.enableValidation()

      expect(form.vm.validation).toBe(true)
    })
  })

  describe('setLanguage', () => {
    it('should set language', async () => {
      let form = createForm({
        language: 'en',
        schema: {
          el: { type: 'text' },
        }
      })

      form.vm.setLanguage('de')

      expect(form.vm.selectedLanguage).toBe('de')
    })

    it('should fire langauge', async () => {
      let languageMock = jest.fn()

      let form = createForm({
        language: 'en',
        schema: {
          el: { type: 'text' },
        }
      })

      form.vm.on('language', languageMock)

      form.vm.setLanguage('de')

      expect(languageMock).toHaveBeenCalledWith('de')
    })
  })

  describe('handleSubmit', () => {
    it('should trigger submit', async () => {
      let onSubmitMock = jest.fn()

      let form = createForm({
        schema: {
          el: { type: 'text' },
        }
      })

      form.vm.on('submit', onSubmitMock)

      form.vm.$laraform.services.axios.post = () => ({ data: {} })

      form.vm.handleSubmit()

      await flushPromises()

      expect(onSubmitMock).toHaveBeenCalled()
    })
  })

  describe('el$', () => {
    it('should return element with `el$`', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
          },
        }
      })

      await nextTick()

      expect(form.vm.el$('el').name).toBe('el')
    })

    it('should return element in object with `el$`', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'object',
            schema: {
              child: {
                type: 'text'
              }
            }
          },
        }
      })

      await nextTick()

      expect(form.vm.el$('el.child').name).toBe('child')
    })

    it('should return element in group with `el$`', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'group',
            schema: {
              child: {
                type: 'text'
              }
            }
          },
        }
      })

      await nextTick()

      expect(form.vm.el$('el.child').name).toBe('child')
    })

    it('should return element in element list with `el$`', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'list',
            initial: 1,
            element: {
              type: 'text',
              label: 'child'
            }
          },
        }
      })

      await nextTick()

      expect(form.vm.el$('el.0').label).toBe('child')
    })

    it('should return element in object list with `el$`', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'list',
            initial: 1,
            object: {
              schema: {
                child: {
                  type: 'text',
                }
              } 
            }
          },
        }
      })

      await nextTick()

      expect(form.vm.el$('el.0.child').name).toBe('child')
    })

    it('should return null for `el$` if element can\'t be found', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text',
          },
        }
      })

      await nextTick()

      expect(form.vm.el$('child')).toBe(null)
      expect(form.vm.el$('el.child')).toBe(null)
    })
  })

  describe('siblings$', () => {
    it('should return return `siblings$` of element', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text'
          },
          el2: {
            type: 'text'
          },
          el3: {
            type: 'text'
          },
        }
      })

      await nextTick()

      expect(_.keys(form.vm.siblings$('el2'))).toStrictEqual(['el', 'el2', 'el3'])
    })

    it('should return return `siblings$` of element in object', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'object',
            schema: {
              child: {
                type: 'text'
              },
              child2: {
                type: 'text'
              },
              child3: {
                type: 'text'
              },
            }
          },
        }
      })

      await nextTick()

      expect(_.keys(form.vm.siblings$('el.child2'))).toStrictEqual(['child', 'child2', 'child3'])
    })

    it('should return return `siblings$` of element in group', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'group',
            schema: {
              child: {
                type: 'text'
              },
              child2: {
                type: 'text'
              },
              child3: {
                type: 'text'
              },
            }
          },
        }
      })

      await nextTick()

      expect(_.keys(form.vm.siblings$('el.child2'))).toStrictEqual(['child', 'child2', 'child3'])
    })

    it('should return return `siblings$` of element in element list', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'list',
            initial: 3,
            element: {
              type: 'text',
            }
          },
        }
      })

      await nextTick()

      expect(_.keys(form.vm.siblings$('el.1'))).toStrictEqual(['0','1','2'])
    })

    it('should return return `siblings$` of element in object list', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'list',
            initial: 3,
            object: {
              schema: {
                child: {
                  type: 'text',
                },
                child2: {
                  type: 'text',
                },
                child3: {
                  type: 'text',
                },
              } 
            }
          },
        }
      })

      await nextTick()

      expect(_.keys(form.vm.siblings$('el.1'))).toStrictEqual(['0','1','2'])
      expect(_.keys(form.vm.siblings$('el.1.child'))).toStrictEqual(['child', 'child2', 'child3'])
    })
  })
})