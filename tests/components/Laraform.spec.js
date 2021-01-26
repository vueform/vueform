import _ from 'lodash'
import { findAllComponents, createElement } from 'test-helpers'
import { ref, markRaw, nextTick } from 'composition-api'
import flushPromises from 'flush-promises'
import defaultTheme from './../../src/themes/default'
import bootstrap from './../../src/themes/bootstrap'
import { mergeComponentClasses } from './../../src/utils/mergeClasses'
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

    tests.schema({ schema }, {}, 'Options API')
    tests.schema({}, {setup: () => ({ schema: ref(schema), })}, 'Composition API')
    tests.schema({}, { propsData: { form: { schema }}}, ':form prop', )

    it('should have {} as default', () => {
      let form = createForm({})

      expect(form.vm.schema).toStrictEqual({})
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
          form: {
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
        }
      })

      expect(form.vm.schema).toStrictEqual({
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
        },
        propsData: {
          form: {
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
        }
      })

      expect(form.vm.schema).toStrictEqual({
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
    tests.tabs({}, {setup: () => ({ schema: ref(schema), tabs: ref(tabs), })}, 'Composition API')
    tests.tabs({}, { propsData: { form: { tabs, schema }}}, ':form prop', )

    it('should have {} as default', () => {
      let form = createForm({})

      expect(form.vm.tabs).toStrictEqual({})
    })

    it('should merge deep Options API schema to :form prop schema', () => {
      let form = createForm({
        tabs: { first: { label: 'First', buttons: { previous: true } } },
        schema: { el: { type: 'text' }, }
      }, {
        propsData: {
          form: {
            tabs: { first: { label: 'Not first', elements: ['el'], buttons: { previous: false, next: true } } },
          }
        }
      })

      expect(form.vm.tabs).toStrictEqual({
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
            tabs: ref({ first: { label: 'First', buttons: { previous: true } } }),
            schema: ref({ el: { type: 'text' }, })
          }
        },
        propsData: {
          form: {
            tabs: { first: { label: 'Not first', elements: ['el'], buttons: { previous: false, next: true } } },
          }
        }
      })

      expect(form.vm.tabs).toStrictEqual({
        first: {
          label: 'First',
          elements: ['el'],
          buttons: { previous: true, next: true }
        }
      })
    })
  })

  describe('wizard', () => {
    let wizard = {
      first: { label: 'First', elements: ['el'], },
      second: { label: 'Second', elements: ['el2'] },
    }

    let schema = {
      el: { type: 'text', },
      el2: { type: 'text', },
      el3: { type: 'text', },
    }

    tests.wizard({ wizard, schema }, {}, 'Options API')
    tests.wizard({}, {setup: () => ({ schema: ref(schema), wizard: ref(wizard), })}, 'Composition API')
    tests.wizard({}, { propsData: { form: { wizard, schema }}}, ':form prop', )

    it('should have {} as default', () => {
      let form = createForm({})

      expect(form.vm.wizard).toStrictEqual({})
    })

    it('should merge deep Options API schema to :form prop schema', () => {
      let form = createForm({
        wizard: { first: { label: 'First', buttons: { previous: true } } },
        schema: { el: { type: 'text' }, }
      }, {
        propsData: {
          form: {
            wizard: { first: { label: 'Not first', elements: ['el'], buttons: { previous: false, next: true } } },
          }
        }
      })

      expect(form.vm.wizard).toStrictEqual({
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
            wizard: ref({ first: { label: 'First', buttons: { previous: true } } }),
            schema: ref({ el: { type: 'text' }, })
          }
        },
        propsData: {
          form: {
            wizard: { first: { label: 'Not first', elements: ['el'], buttons: { previous: false, next: true } } },
          }
        }
      })

      expect(form.vm.wizard).toStrictEqual({
        first: {
          label: 'First',
          elements: ['el'],
          buttons: { previous: true, next: true }
        }
      })
    })
  })

  describe('wizardControls', () => {
    let wizardControls = false

    tests.wizardControls({ wizardControls }, {}, 'Options API')
    tests.wizardControls({}, {setup: () => ({ wizardControls: ref(wizardControls) })}, 'Composition API')
    tests.wizardControls({}, { propsData: { form: { wizardControls }}}, ':form prop', )

    it('should have true as default', () => {
      let form = createForm({})

      expect(form.vm.wizardControls).toStrictEqual(true)
    })
  })

  describe('theme', () => {
    let theme = 'bootstrap'

    tests.theme({ theme }, { config: { themes: { bootstrap, default: defaultTheme } } }, 'Options API')
    tests.theme({}, {setup: () => ({ theme: ref(theme) }), config: { themes: { bootstrap, default: defaultTheme } }}, 'Composition API')
    tests.theme({}, { propsData: { form: { theme }}, config: { themes: { bootstrap, default: defaultTheme } }}, ':form prop', )

    it('should have config.theme as default', () => {
      let form = createForm({}, {
        config: { themes: { bootstrap, default: defaultTheme } },
      })

      expect(form.vm.theme).toStrictEqual(form.vm.$laraform.theme)
    })
  })

  describe('endpoint', () => {
    let endpoint = '/my/process'

    tests.endpoint({ endpoint }, {}, 'Options API')
    tests.endpoint({}, {setup: () => ({ endpoint: ref(endpoint) })}, 'Composition API')
    tests.endpoint({}, { propsData: { form: { endpoint }}}, ':form prop', )

    it('should have config.endpoints.process as default', () => {
      let form = createForm({})

      expect(form.vm.endpoint).toStrictEqual(form.vm.$laraform.endpoints.process)
    })
  })

  describe('method', () => {
    let method = 'GET'

    tests.method({ method }, {}, 'Options API')
    tests.method({}, {setup: () => ({ method: ref(method) })}, 'Composition API')
    tests.method({}, { propsData: { form: { method }}}, ':form prop', )

    it('should have config.methods.process as default', () => {
      let form = createForm({})

      expect(form.vm.method).toStrictEqual(form.vm.$laraform.methods.process)
    })
  })

  describe('key', () => {
    let key = '1234'

    tests.key({ key }, {}, 'Options API')
    tests.key({}, {setup: () => ({ key: ref(key) })}, 'Composition API')
    tests.key({}, { propsData: { form: { key }}}, ':form prop', )

    it('should have null as default', () => {
      let form = createForm({})

      expect(form.vm.key).toStrictEqual(null)
    })
  })

  describe('class', () => {
    let class_ = 'form-class'

    tests.class({ class:class_ }, {}, 'Options API')
    tests.class({}, {setup: () => ({ class: ref(class_) })}, 'Composition API')
    tests.class({}, { propsData: { form: { class:class_ }}}, ':form prop', )

    it('should have null as default', () => {
      let form = createForm({})

      expect(form.vm.class).toStrictEqual(null)
    })
  })

  describe('classes', () => {
    let classes = { TextElement: { container: 'text' } }

    tests.classes({ classes }, {}, 'Options API')
    tests.classes({}, {setup: () => ({ classes: ref(classes) })}, 'Composition API')
    tests.classes({}, { propsData: { form: { classes }}}, ':form prop', )

    it('should have {} as default', () => {
      let form = createForm({})

      expect(form.vm.classes).toStrictEqual({})
    })

    it('should merge deep Options API schema to :form prop schema', () => {
      let form = createForm({
        schema: {},
        classes: { TextElement: { container: 'text', placeholder: 'placeholder' } }
      }, {
        propsData: {
          form: {
            classes: { TextElement: { container: 'not-text', label: 'label' } }
          }
        }
      })

      expect(form.vm.classes).toStrictEqual({
        TextElement: { container: 'text', label: 'label', placeholder: 'placeholder' }
      })
    })

    it('should merge deep Composition API schema to :form prop schema', () => {
      let form = createForm({}, {
        setup(props, context) {
          return {
            schema: ref({}),
            classes: ref({ TextElement: { container: 'text', placeholder: 'placeholder' } })
          }
        },
        propsData: {
          form: {
            classes: { TextElement: { container: 'not-text', label: 'label' } }
          }
        }
      })

      expect(form.vm.classes).toStrictEqual({
        TextElement: { container: 'text', label: 'label', placeholder: 'placeholder' }
      })
    })
  })

  describe('addClasses', () => {
    let addClasses = { TextElement: { container: 'text' } }

    tests.addClasses({ addClasses }, {}, 'Options API')
    tests.addClasses({}, {setup: () => ({ addClasses: ref(addClasses) })}, 'Composition API')
    tests.addClasses({}, { propsData: { form: { addClasses }}}, ':form prop', )

    it('should have {} as default', () => {
      let form = createForm({})

      expect(form.vm.addClasses).toStrictEqual({})
    })

    it('should merge deep Options API schema to :form prop schema', () => {
      let form = createForm({
        schema: {},
        addClasses: { TextElement: { container: 'text', placeholder: 'placeholder' } }
      }, {
        propsData: {
          form: {
            addClasses: { TextElement: { container: 'not-text', label: 'label' } }
          }
        }
      })

      expect(form.vm.addClasses).toStrictEqual({
        TextElement: { container: 'text', label: 'label', placeholder: 'placeholder' }
      })
    })

    it('should merge deep Composition API schema to :form prop schema', () => {
      let form = createForm({}, {
        setup(props, context) {
          return {
            schema: ref({}),
            addClasses: ref({ TextElement: { container: 'text', placeholder: 'placeholder' } })
          }
        },
        propsData: {
          form: {
            addClasses: { TextElement: { container: 'not-text', label: 'label' } }
          }
        }
      })

      expect(form.vm.addClasses).toStrictEqual({
        TextElement: { container: 'text', label: 'label', placeholder: 'placeholder' }
      })
    })
  })

  describe('elements', () => {
    let elements = { TextElement: markRaw({}) }

    tests.elements({ elements }, {}, 'Options API')
    tests.elements({}, {setup: () => ({ elements: ref(elements) })}, 'Composition API')
    tests.elements({}, { propsData: { form: { elements }}}, ':form prop', )

    it('should have {} as default', () => {
      let form = createForm({})

      expect(form.vm.elements).toStrictEqual({})
    })

    it('should merge deep Options API schema to :form prop schema', () => {
      let form = createForm({
        schema: {},
        elements: { TextElement: markRaw({ name: 'Text', label: 'label' }) }
      }, {
        propsData: {
          form: {
            elements: { TextElement: markRaw({ name: 'NotText', placeholder: 'placeholder' }) }
          }
        }
      })

      expect(form.vm.elements).toStrictEqual({
        TextElement: markRaw({ name: 'Text', placeholder: 'placeholder', label: 'label' })
      })
    })

    it('should merge deep Composition API schema to :form prop schema', () => {
      let form = createForm({}, {
        setup(props, context) {
          return {
            schema: ref({}),
            elements: ref({ TextElement: markRaw({ name: 'Text', label: 'label' }) })
          }
        },
        propsData: {
          form: {
            elements: { TextElement: markRaw({ name: 'NotText', placeholder: 'placeholder' }) }
          }
        }
      })

      expect(form.vm.elements).toStrictEqual({
        TextElement: markRaw({ name: 'Text', placeholder: 'placeholder', label: 'label' })
      })
    })
  })

  describe('components', () => {
    let components = { FormButton: markRaw({}) }

    tests.components({ components }, {}, 'Options API')
    tests.components({}, {setup: () => ({ components: ref(components) })}, 'Composition API')
    tests.components({}, { propsData: { form: { components }}}, ':form prop', )

    it('should have {} as default', () => {
      let form = createForm({})

      expect(form.vm.components).toStrictEqual({})
    })

    it('should merge deep Options API schema to :form prop schema', () => {
      let form = createForm({
        schema: {},
        components: { ElementText: markRaw({ name: 'Text', label: 'label' }) }
      }, {
        propsData: {
          form: {
            components: { ElementText: markRaw({ name: 'NotText', placeholder: 'placeholder' }) }
          }
        }
      })

      expect(form.vm.components).toStrictEqual({
        ElementText: markRaw({ name: 'Text', placeholder: 'placeholder', label: 'label' })
      })
    })

    it('should merge deep Composition API schema to :form prop schema', () => {
      let form = createForm({}, {
        setup(props, context) {
          return {
            schema: ref({}),
            components: ref({ ElementText: markRaw({ name: 'Text', label: 'label' }) })
          }
        },
        propsData: {
          form: {
            components: { ElementText: markRaw({ name: 'NotText', placeholder: 'placeholder' }) }
          }
        }
      })

      expect(form.vm.components).toStrictEqual({
        ElementText: markRaw({ name: 'Text', placeholder: 'placeholder', label: 'label' })
      })
    })
  })

  describe('columns', () => {
    let columns = { element: 9, label: 3, field: 9 }

    tests.columns({ columns }, {}, 'Options API')
    tests.columns({}, {setup: () => ({ columns: ref(columns) })}, 'Composition API')
    tests.columns({}, { propsData: { form: { columns }}}, ':form prop', )

    it('should have config.columns as default', () => {
      let form = createForm({})

      expect(form.vm.columns).toStrictEqual(form.vm.$laraform.columns)
    })
  })

  describe('labels', () => {
    let labels = true

    tests.labels({ labels }, {}, 'Options API')
    tests.labels({}, {setup: () => ({ labels: ref(labels) })}, 'Composition API')
    tests.labels({}, { propsData: { form: { labels }}}, ':form prop', )

    it('should have null as default', () => {
      let form = createForm({})

      expect(form.vm.labels).toStrictEqual(form.vm.$laraform.labels)
    })
  })

  describe('multilingual', () => {
    let multilingual = true

    tests.multilingual({ multilingual }, {}, 'Options API')
    tests.multilingual({}, {setup: () => ({ multilingual: ref(multilingual) })}, 'Composition API')
    tests.multilingual({}, { propsData: { form: { multilingual }}}, ':form prop', )

    it('should have false as default', () => {
      let form = createForm({})

      expect(form.vm.multilingual).toStrictEqual(false)
    })
  })

  describe('languages', () => {
    let languages = { en: { code: 'en', label: 'English' }, de: { code: 'de', label: 'German' } }

    tests.languages({ languages }, {}, 'Options API')
    tests.languages({}, {setup: () => ({ languages: ref(languages) })}, 'Composition API')
    tests.languages({}, { propsData: { form: { languages }}}, ':form prop', )

    it('should have config.languages as default', () => {
      let form = createForm({})

      expect(form.vm.languages).toStrictEqual(form.vm.$laraform.languages)
    })
  })

  describe('language', () => {
    let language = 'de'

    tests.language({ language }, {}, 'Options API')
    tests.language({}, {setup: () => ({ language: ref(language) })}, 'Composition API')
    tests.language({}, { propsData: { form: { language }}}, ':form prop', )

    it('should have config.language as default', () => {
      let form = createForm({})

      expect(form.vm.language).toStrictEqual(form.vm.$laraform.language)
    })
  })

  describe('messages', () => {
    let messages = { required: 'Required' }

    tests.messages({ messages }, {}, 'Options API')
    tests.messages({}, {setup: () => ({ messages: ref(messages) })}, 'Composition API')
    tests.messages({}, { propsData: { form: { messages }}}, ':form prop', )

    it('should have {} as default', () => {
      let form = createForm({})

      expect(form.vm.messages).toStrictEqual({})
    })

    it('should merge deep Options API schema to :form prop schema', () => {
      let form = createForm({
        schema: {},
        messages: { required: 'required', email: 'email' }
      }, {
        propsData: {
          form: {
            messages: { required: 'not required' }
          }
        }
      })

      expect(form.vm.messages).toStrictEqual({
        required: 'required', email: 'email'
      })
    })

    it('should merge deep Composition API schema to :form prop schema', () => {
      let form = createForm({}, {
        setup() {
          return {
            schema: ref({}),
            messages: ref({ required: 'required', email: 'email' })
          }
        },
        propsData: {
          form: {
            messages: { required: 'not required' }
          }
        }
      })

      expect(form.vm.messages).toStrictEqual({
        required: 'required', email: 'email'
      })
    })
  })

  describe('displayErrors', () => {
    let displayErrors = false

    tests.displayErrors({ displayErrors }, {}, 'Options API')
    tests.displayErrors({}, {setup: () => ({ displayErrors: ref(displayErrors) })}, 'Composition API')
    tests.displayErrors({}, { propsData: { form: { displayErrors }}}, ':form prop', )

    it('should have null as default', () => {
      let form = createForm({})

      expect(form.vm.displayErrors).toStrictEqual(form.vm.$laraform.displayErrors)
    })
  })

  describe('validateOn', () => {
    let validateOn = 'submit'

    tests.validateOn({ validateOn }, {}, 'Options API')
    tests.validateOn({}, {setup: () => ({ validateOn: ref(validateOn) })}, 'Composition API')
    tests.validateOn({}, { propsData: { form: { validateOn }}}, ':form prop', )

    it('should have null as default', () => {
      let form = createForm({})

      expect(form.vm.validateOn).toStrictEqual(form.vm.$laraform.validateOn)
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

    it('should contain child elements when using inline elements', () => {
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
            createElement(h, this.extendedTheme.elements.TextElement, {
              props: {
                schema: this.schema.el,
                name: 'el'
              }
            }),
            createElement(h, 'div', [
              createElement(h, this.extendedTheme.elements.TextElement, {
                props: {
                  schema: this.schema.el2,
                  name: 'el2'
                }
              })
            ])
          ])
        ])
      })

      let elWrapper = findAllComponents(form, { name: 'TextElement' }).at(0)
      let el2Wrapper = findAllComponents(form, { name: 'TextElement' }).at(1)
      
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
            createElement(h, this.extendedTheme.components.FormTabs, {
              props: {
                tabs: this.tabs,
                elements$: this.elements$
              }
            })
          ]),
          createElement(h, this.extendedTheme.elements.TextElement, {
            props: {
              schema: this.schema.el,
              name: 'el'
            }
          }),
          createElement(h, this.extendedTheme.elements.TextElement, {
            props: {
              schema: this.schema.el2,
              name: 'el2'
            }
          }),
        ])
      })

      let tabsWrapper = findAllComponents(form, { name: 'FormTabs' }).at(0)
      
      expect(form.vm.tabs$).toStrictEqual(tabsWrapper.vm)
    })
  })

  describe('wizard$', () => {
    it('should contain FormWizard when using default template', async () => {
      let form = createForm({
        wizard: {
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

      let wizardWrapper = findAllComponents(form, { name: 'FormWizard' }).at(0)
      
      expect(form.vm.wizard$).toStrictEqual(wizardWrapper.vm)
    })

    it('should contain FormWizard when using custom template', async () => {
      let form = createForm({
        wizard: {
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
            createElement(h, this.extendedTheme.components.FormWizard, {
              props: {
                steps: this.wizard,
                elements$: this.elements$
              }
            })
          ]),
          createElement(h, this.extendedTheme.elements.TextElement, {
            props: {
              schema: this.schema.el,
              name: 'el'
            }
          }),
          createElement(h, this.extendedTheme.elements.TextElement, {
            props: {
              schema: this.schema.el2,
              name: 'el2'
            }
          }),
        ])
      })

      let wizardWrapper = findAllComponents(form, { name: 'FormWizard' }).at(0)
      
      expect(form.vm.wizard$).toStrictEqual(wizardWrapper.vm)
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

  describe('filtered', () => {
    it('should collect filtered from children', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text', default: 'value' },
          el2: { type: 'text', default: 'value2', conditions: [['el', 'not-value']] },
        }
      })
      
      expect(form.vm.filtered).toStrictEqual({el:'value'})
    })
  })

  describe('formData', () => {
    it('should transform data to FormData with key and data props', async () => {
      let form = createForm({
        key: '1234',
        schema: {
          el: { type: 'text', default: 'value' },
          el2: { type: 'text', default: 'value2' },
        }
      })

      let formData = new FormData()
      formData.append('key', '1234')
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

  describe('disabled', () => {
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

      expect(form.vm.disabled).toBe(true)
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

      expect(form.vm.disabled).toBe(false)
    })

    it('should not be disabled when busy', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text' },
        }
      })

      form.vm.submitting = true

      expect(form.vm.disabled).toBe(true)

      form.vm.submitting = false

      expect(form.vm.disabled).toBe(false)
    })
  })

  describe('shouldValidateOnChange', () => {
    it('should be true if validateOn contains change', async () => {
      let form = createForm({
        validateOn: 'submit|change',
      })

      expect(form.vm.shouldValidateOnChange).toBe(true)

      form.vm.validateOn = 'submit'

      expect(form.vm.shouldValidateOnChange).toBe(false)
    })
  })

  describe('shouldValidateOnSubmit', () => {
    it('should be true if validateOn contains submit', async () => {
      let form = createForm({
        validateOn: 'submit|change',
      })

      expect(form.vm.shouldValidateOnSubmit).toBe(true)

      form.vm.validateOn = 'change'

      expect(form.vm.shouldValidateOnSubmit).toBe(false)
    })
  })

  describe('shouldValidateOnStep', () => {
    it('should be true if validateOn contains step', async () => {
      let form = createForm({
        validateOn: 'submit|step',
      })

      expect(form.vm.shouldValidateOnStep).toBe(true)

      form.vm.validateOn = 'submit'

      expect(form.vm.shouldValidateOnStep).toBe(false)
    })
  })

  describe('hasWizard', () => {
    it('should be false if wizard is not defined', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text' }
        }
      })

      expect(form.vm.hasWizard).toBe(false)
    })

    it('should be true if wizard is defined', async () => {
      let form = createForm({
        wizard: {
          first: { elements: ['el'] }
        },
        schema: {
          el: { type: 'text' }
        }
      })

      expect(form.vm.hasWizard).toBe(true)
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

      expect(form.vm.defaultClasses).toStrictEqual(form.vm.extendedTheme.components.Laraform.data().defaultClasses)
    })
  })

  describe('extendedClasses', () => {
    let defaultClasses = defaultTheme.components.Laraform.data().defaultClasses
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
        classes: {
          Laraform: overwriteClasses1
        }
      })

      expect(form.vm.extendedClasses).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses1))

      form.vm.classes.Laraform = overwriteClasses2

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
            classes: ref({
              Laraform: overwriteClasses1
            })
          }
        }
      })

      expect(form.vm.extendedClasses).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses1))

      form.vm.classes.Laraform = overwriteClasses2

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
          form: {
            classes: {
              Laraform: overwriteClasses1
            }
          }
        }
      })

      expect(form.vm.extendedClasses).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses1))

      form.vm.classes.Laraform = overwriteClasses2

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
        classes: {
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

      form.vm.classes.Laraform = overwriteClasses2

      expect(form.vm.extendedClasses).toStrictEqual(Object.assign({}, defaultClasses, overwriteClasses2))
    })

    it('should have addClasses in form add classes, even when changes using Options API', async () => {
      let addClasses1 = {
        [mainClass]: 'form-add-class'
      }
      let addClasses2 = {
        [mainClass]: 'form-add-class2'
      }

      let form = createForm({
        addClasses: {
          Laraform: addClasses1
        }
      })

      expect(form.vm.extendedClasses[mainClass]).toStrictEqual(defaultClasses[mainClass] + ' ' + addClasses1[mainClass])

      form.vm.addClasses.Laraform = addClasses2

      expect(form.vm.extendedClasses[mainClass]).toStrictEqual(defaultClasses[mainClass] + ' ' + addClasses2[mainClass])
    })

    it('should have addClasses in form add classes, even when changes using Composition API', async () => {
      let addClasses1 = {
        [mainClass]: 'form-add-class'
      }
      let addClasses2 = {
        [mainClass]: 'form-add-class2'
      }

      let form = createForm({}, {
        setup() {
          return {
            addClasses: ref({
              Laraform: addClasses1
            })
          }
        }
      })

      expect(form.vm.extendedClasses[mainClass]).toStrictEqual(defaultClasses[mainClass] + ' ' + addClasses1[mainClass])

      form.vm.addClasses.Laraform = addClasses2

      expect(form.vm.extendedClasses[mainClass]).toStrictEqual(defaultClasses[mainClass] + ' ' + addClasses2[mainClass])
    })

    it('should have addClasses in form add classes, even when changes using :form prop', async () => {
      let addClasses1 = {
        [mainClass]: 'form-add-class'
      }
      let addClasses2 = {
        [mainClass]: 'form-add-class2'
      }

      let form = createForm({}, {
        propsData: {
          form: {
            addClasses: {
              Laraform: addClasses1
            }
          }
        }
      })

      expect(form.vm.extendedClasses[mainClass]).toStrictEqual(defaultClasses[mainClass] + ' ' + addClasses1[mainClass])

      form.vm.addClasses.Laraform = addClasses2

      expect(form.vm.extendedClasses[mainClass]).toStrictEqual(defaultClasses[mainClass] + ' ' + addClasses2[mainClass])
    })

    it('should have class add classes, even when changes', async () => {
      let class1 = 'form-class'

      let class2 = ['form-class2-a', 'form-class2-b']

      let form = createForm({
        class: class1
      })

      expect(form.vm.extendedClasses).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses), { [mainClass]: class1 }))

      form.vm.class = class2

      expect(form.vm.extendedClasses).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses), { [mainClass]: class2 }))
    })

    it('should have class add classes, even when changes using Composition API', async () => {
      let class1 = 'form-class'

      let class2 = ['form-class2-a', 'form-class2-b']

      let form = createForm({}, {
        setup() {
          return {
            class: ref(class1)
          }
        }
      })

      expect(form.vm.extendedClasses).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses), { [mainClass]: class1 }))

      form.vm.class = class2

      expect(form.vm.extendedClasses).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses), { [mainClass]: class2 }))
    })

    it('should have class add classes, even when changes using :form prop', async () => {
      let class1 = 'form-class'

      let class2 = ['form-class2-a', 'form-class2-b']

      let form = createForm({}, {
        propsData: {
          form: {
            class: class1,
          }
        }
      })

      expect(form.vm.extendedClasses).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses), { [mainClass]: class1 }))

      form.vm.class = class2

      expect(form.vm.extendedClasses).toStrictEqual(mergeComponentClasses(Object.assign({}, defaultClasses), { [mainClass]: class2 }))
    })

    // Rendering
    it('should mainClass to the container DOM', async () => {
      let themeClasses = {
        Laraform: {
          [mainClass]: 'theme-classes'
        }
      }

      let form = createForm({
        classes: {
          Laraform: {
            [mainClass]: 'form-classes'
          }
        },
        class: 'form-class',
        addClasses: {
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

      expect(form.vm.extendedComponents).toStrictEqual(Object.assign({}, form.vm.extendedTheme.components, form.vm.extendedTheme.elements))
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

    it('should be equal to form theme value when defined with Options API', async () => {
      let form = createForm({
        theme: 'default'
      }, {
        propsData: {
          form: {
            theme: 'not-default'
          }
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

    it('should be equal to form theme value when defined with Composition API', async () => {
      let form = createForm({}, {
        setup() {
          return {
            theme: ref('default')
          }
        },
        propsData: {
          form: {
            theme: 'not-default'
          }
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

    it('should be equal to :form prop theme value when defined', async () => {
      let form = createForm({}, {
        propsData: {
          form: {
            theme: 'default'
          }
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

      expect(form.vm.extendedTheme.elements.SelectElement.name).toBe('FormSelectElement')
      expect(form.vm.extendedTheme.elements.TextareaElement.name).toBe('FormTextareaElement')
      expect(form.vm.extendedTheme.elements.TextElement.name).toBe('ConfigTextElement')
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

      expect(form.vm.extendedTheme.elements.FormButton.name).toBe('FormFormButton')
      expect(form.vm.extendedTheme.elements.ElementText.name).toBe('FormElementText')
      expect(form.vm.extendedTheme.elements.FormTab.name).toBe('ConfigFormTab')
    })

    it('should merge deep theme classes with local classes', async () => {
      let form = createForm({
        classes: {
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

  describe('update', () => {
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

      expect(form.vm.el$('el').dirty).toBe(false)
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
        setup() {
          return {
            formatLoad: ref((data) => {
              return {
                el: data.el + '-formatted',
                el2: data.el2 + '-formatted',
                child: data.child + '-formatted',
              }
            })
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
          form:{
            formatLoad(data) {
              return {
                el: data.el + '-formatted',
                el2: data.el2 + '-formatted',
                child: data.child + '-formatted',
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

    it('should enable all wizard steps on load', async () => {
      let form = createForm({
        wizard: {
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

      expect(form.vm.wizard$.steps$.first.disabled).toBe(false)
      expect(form.vm.wizard$.steps$.second.disabled).toBe(false)
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

    it('should reset wizard', async () => {
      let form = createForm({
        wizard: {
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

      expect(form.vm.wizard$.steps$.first.disabled).toBe(false)
      expect(form.vm.wizard$.steps$.second.disabled).toBe(false)

      form.vm.reset()

      await nextTick()

      expect(form.vm.wizard$.steps$.first.disabled).toBe(false)
      expect(form.vm.wizard$.steps$.second.disabled).toBe(true)
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

    it('should clear wizard', async () => {
      let form = createForm({
        wizard: {
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

      expect(form.vm.wizard$.steps$.first.disabled).toBe(false)
      expect(form.vm.wizard$.steps$.second.disabled).toBe(false)

      form.vm.clear()

      await nextTick()

      expect(form.vm.wizard$.steps$.first.disabled).toBe(false)
      expect(form.vm.wizard$.steps$.second.disabled).toBe(true)
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

  describe('clear', () => {
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
        validateOn: 'change|submit',
        schema: {
          el: { type: 'text', rules: 'required', default: 'value' },
        }
      })

      let el = form.vm.el$('el')

      el.validate()

      await flushPromises()

      el.model = null
      
      form.vm.validate()

      await flushPromises()

      expect(form.vm.validated).toBe(true)
      expect(form.vm.invalid).toBe(false)
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
        validateOn: 'change|submit',
        schema: {
          el: { type: 'text', rules: 'required', default: 'value' },
        }
      })

      let el = form.vm.el$('el')
      
      el.validate()

      await flushPromises()

      el.model = null

      form.vm.validate()

      await flushPromises()

      expect(form.vm.el$('el').validated).toBe(true)
      expect(form.vm.el$('el').invalid).toBe(false)
    })

    it('should validate validated elements if doesn\'t validate on change', async () => {
      let form = createForm({
        validateOn: 'submit',
        schema: {
          el: { type: 'text', rules: 'required', default: 'value' },
        }
      })

      let el = form.vm.el$('el')
      
      el.validate()

      await flushPromises()

      el.model = null

      form.vm.validate()

      await flushPromises()

      expect(form.vm.el$('el').validated).toBe(true)
      expect(form.vm.el$('el').invalid).toBe(true)
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

    it('should validate if should validate on submit and return if invalid', async () => {
      let onSubmitMock = jest.fn()

      let form = createForm({
        validateOn: 'submit|change',
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

    it('should not validate if should not validate on submit', async () => {
      let onSubmitMock = jest.fn()

      let form = createForm({
        validateOn: 'change',
        schema: {
          el: { type: 'text', rules: 'required' },
        }
      })

      form.vm.$laraform.services.axios.post = () => ({ data: {} })

      form.vm.on('submit', onSubmitMock)

      form.vm.submit()

      await flushPromises()

      expect(form.vm.invalid).toBe(false)
      expect(onSubmitMock).toHaveBeenCalled()
    })

    it('should set preparing', async () => {
      let form = createForm({
        validateOn: 'change',
        schema: {
          el: {
            type: 'text',
          },
        },
      })


      form.vm.$laraform.services.axios.post = () => ({ data: {} })

      form.vm.submit()

      expect(form.vm.preparing).toBe(true)

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
        prepare() {
          throw Error('Failed')
        },
      })


      form.vm.$laraform.services.axios.post = () => ({ data: {} })

      form.vm.on('error', errorMock)

      form.vm.submit()

      expect(form.vm.preparing).toBe(true)
    
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

      expect(form.vm.language).toBe('de')
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

  describe('updateSchema', () => {
    it('should update schema', async () => {
      let form = createForm({
        schema: {
          el: { type: 'text' },
        }
      })

      form.vm.updateSchema({
        el2: { type: 'text' },
      })

      expect(form.vm.schema).toStrictEqual({
        el2: { type: 'text' },
      })
    })
  })

  describe('handleChangeLanguage', () => {
    it('should set language', async () => {
      let form = createForm({
        language: 'en',
        schema: {
          el: { type: 'text' },
        }
      })

      form.vm.handleChangeLanguage('de')

      expect(form.vm.language).toBe('de')
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

  describe('mounted', () => {
    it('should load data when :form has data prop', async () => {
      let form = createForm({
        schema: {
          el: {
            type: 'text'
          },
        }
      }, {
        propsData: {
          form: {
            data: {
              el: 'value'
            }
          }
        }
      })

      await nextTick()

      expect(form.vm.data).toStrictEqual({
        el: 'value'
      })
    })
  })
})