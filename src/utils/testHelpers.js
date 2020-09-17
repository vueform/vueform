import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import { Laraform } from './../index'
import installer from './../installer'
import bootstrap from './../themes/bootstrap'
import defaultTheme from './../themes/default'
import config from './../config'
import condition from './../plugins/condition/services/condition'
import validation from './../services/validation'
import messageBag from './../services/messageBag'
import autosize from './../services/autosize'
import en from './../locales/en'
import _ from 'lodash'
import axios from 'axios'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
window._ = _

const themes = {
  bootstrap,
  default: defaultTheme,
}

const createLaraformInstaller = function(options = {}) {
  const theme = options.theme || config.theme
  
  let finalConfig = Object.assign({}, config, {
    theme: theme
  }, options.config || {})

  const LaraformInstaller = installer(finalConfig)

  LaraformInstaller.theme(theme, themes[theme])

  if (options.elements !== undefined) {
    LaraformInstaller.elements(options.elements)
  }

  if (options.components !== undefined) {
    LaraformInstaller.components(options.components)
  }

  if (options.themes !== undefined) {
    _.each(options.themes, (optionTheme, name) => {
      LaraformInstaller.theme(name, optionTheme)
    })
  }

  if (options.rules !== undefined) {
    _.each(options.rules, (rule, name) => {
      LaraformInstaller.rule(name, rule)
    })
  }

  if (options.plugins !== undefined) {
    LaraformInstaller.plugins(options.plugins)
  }

  if (options.locales !== undefined) {
    _.each(options.locales, (locale, name) => {
      LaraformInstaller.locale(name, locale)
    })
  } else {
    LaraformInstaller.locale('en', en)
  }

  return {
    LaraformInstaller,
    config: finalConfig,
  }
}

const installLaraform = function(options = {}) {
  const { LaraformInstaller, config } = createLaraformInstaller(options)

  const LocalVue = createLocalVue()

  let store = null

  if (options.vuex) {
    LocalVue.use(Vuex)

    store = new Vuex.Store({
      state: options.vuex,
    })

    if (options.laraformStore !== false) {
      LaraformInstaller.store(store)
    }
  }

  if (options.vueI18n) {
    LocalVue.use(VueI18n)
  }

  LocalVue.use(LaraformInstaller)

  return {
    LocalVue,
    config,
    store
  }
}

const createForm = function(data, options = {}) {
  let { LocalVue, config, store } = installLaraform(options)

  let form = LocalVue.extend({
    mixins: [Laraform],
    data() {
      return data
    }
  })

  let i18n = null

  if (options.vueI18n) {
    i18n = new VueI18n({
      locale: options.vueI18nLocale || 'en', // set locale
      messges: options.vueI18nMessages || { hello: 'world' }, // set locale messages
    })
  }

  let mountOptions = {
    LocalVue,
    store,
    i18n,
    propsData: options.propsData || {},
    mocks: {
      $laraform: {
        config: config,
        plugins: config.plugins,
        services: {
          condition,
          validation,
          axios,
          messageBag,
          autosize,
        },
        locales: options.locales || {
          en: en
        }
      },
      $i18n: options.vueI18n ? new class VueI18n { get locale() { return options.vueI18nLocale || 'en' } } : null,
      $t: options.vueI18n ? (str) => { return str + ' vue-i18n' } : null,
    }
  }

  if (options.attach) {
    mountOptions.attachTo = document.querySelector('body')
  }

  return mount(form, mountOptions)
}

const testThemeComponents = (name, expect) => {
  let components = _.keys(defaultTheme.components)

  const originalConsoleError = console.error

  console.error = () => {}

  expect(() => {
    _.each(components, (component) => {
      let comp

      try {
        comp = require(`./../themes/${name}/components/${component}.vue`).default
      } catch (e) {
          try {
          comp = require(`./../themes/${name}/components/wrappers/${component}.vue`).default
        } catch (e) {
          comp = require(`./../themes/${name}/components/elements/slots/${component}.vue`).default
        }
      }

      if (comp.data) {
        expect(_.keys(comp.data().defaultClasses)).toBeTruthy()
      }
    })
  }).not.toThrowError()
  
  console.error = originalConsoleError
}

const testThemeElements = (name, expect) => {
  let components = _.keys(defaultTheme.elements)

  const originalConsoleError = console.error

  console.error = () => {}

  expect(() => {
    _.each(components, (component) => {
      let comp = require(`./../themes/${name}/components/elements/${component}.vue`).default

      if (comp.data) {
        expect(_.keys(comp.data().defaultClasses)).toBeTruthy()
      }
    })
  }).not.toThrowError()
  
  console.error = originalConsoleError
}

const testDynamics = (done, options, type) => {
  let LocalVue = createLocalVue()

  LocalVue.config.errorHandler = done

  let variables = type === 'wizard'
    ? {
        block: 'step',
        blocksSelector: 'FormWizard',
        blockSelector: 'FormWizardStep',
        controlSelectors: {
          previous: 'FormWizardPrevious',
          next: 'FormWizardNext',
          finish: 'FormWizardFinish',
        }
      }
    : {
        block: 'tab',
        blocksSelector: 'FormTabs',
        blockSelector: 'FormTab',
        controlSelectors: false
      }

  let existingElements = {}
  _.each(options.existingElements || {}, (name) => {
    existingElements[name] = {
      type: 'text',
      label: 'Text' + name.toUpperCase()
    }
  })

  let addedElements = {}
  _.each(options.addedElements || {}, (name) => {
    addedElements[name] = {
      type: 'text',
      label: 'Text' + name.toUpperCase()
    }
  })

  let existingSteps = {}
  _.each(options.existingSteps || {}, (step, name) => {
    existingSteps[name] = step
  })

  let addedSteps = {}
  _.each(options.addedSteps || {}, (step, name) => {
    addedSteps[name] = step
  })

  let existingTabs = {}
  _.each(options.existingTabs || {}, (step, name) => {
    existingTabs[name] = step
  })

  let addedTabs = {}
  _.each(options.addedTabs || {}, (step, name) => {
    addedTabs[name] = step
  })

  let steps = Object.assign({}, existingSteps, addedSteps)
  let tabs = Object.assign({}, existingTabs, addedTabs)
  let blocks = !_.isEmpty(steps) ? steps : tabs

  let collectElements = () => {
    let elements = []
    let all = _.concat(options.existingElements || [], options.addedElements || [])

    _.each(blocks, (block) => {
      _.each(block.elements, (element) => {
        elements.push(element)
      })
    })

    _.each(all, (element) => {
      if (elements.indexOf(element) === -1) {
        elements.push(element)
      }
    })

    return elements
  }

  let elementShouldBeVisible = (elementName, blockName) => {
    return blocks[blockName].elements.indexOf(elementName) !== -1
  }

  let isAtFirstBlock = (form) => {
    let first = _.keys(variables.block)[0]
    let current = form.findComponent({ name: variables.blocksSelector }).vm.current$.name

    return first === current
  }

  let currentBlock = () => {
    return options[variables.block] || _.keys(blocks)[0]
  }

  let form = createForm({
    schema: existingElements,
    wizard: existingSteps,
    tabs: existingTabs,
  })

  if (!_.isEmpty(addedElements)) {
    form.setData({
      schema: addedElements
    })
  }

  LocalVue.nextTick(() => {
    if (!_.isEmpty(addedSteps)) {
      form.setData({
        wizard: addedSteps
      })
    }

    if (!_.isEmpty(addedTabs)) {
      form.setData({
        tabs: addedTabs
      })
    }

    LocalVue.nextTick(() => {
    LocalVue.nextTick(() => {
      if (options[variables.block]) {
        form.findComponent({ name: variables.blocksSelector }).vm.goTo(options[variables.block])
      }

      let i = 0
      _.each(blocks, (block) => {
        let blockComponent = form.findAllComponents({ name: variables.blockSelector }).at(i)

        expect(blockComponent.exists()).toBe(true)
        expect(blockComponent.html()).toContain(block.label)

        if (block.name === currentBlock()) {
          expect(blockComponent.vm.active).toBe(true)
        }
        i++
      })

      _.each(collectElements(), (name, index) => {
        let e = form.findAllComponents({ name: 'TextElement' }).at(index)

        expect(e.exists()).toBe(true)
        expect(e.vm.name).toBe(name)

        LocalVue.nextTick(() => {
          expect(e.vm.visible).toBe(elementShouldBeVisible(name, currentBlock()))
        })
      })

      LocalVue.nextTick(() => {
        LocalVue.nextTick(() => {
          if (variables.controlSelectors) {
            expect(form.findComponent({ name: variables.controlSelectors.previous }).vm.visible).toBe(true)

            if (_.keys(steps).length == 1) {
              expect(form.findComponent({ name: variables.controlSelectors.next }).vm.visible).toBe(false)
              expect(form.findComponent({ name: variables.controlSelectors.finish }).vm.visible).toBe(true)
              expect(form.findComponent({ name: variables.controlSelectors.previous }).vm.disabled).toBe(true)
              expect(form.findComponent({ name: variables.controlSelectors.finish }).vm.disabled).toBe(false)
            } else if (_.keys(steps).length > 1 && isAtFirstBlock(form)) {
              expect(form.findComponent({ name: variables.controlSelectors.next }).vm.visible).toBe(true)
              expect(form.findComponent({ name: variables.controlSelectors.finish }).vm.visible).toBe(false)
              expect(form.findComponent({ name: variables.controlSelectors.previous }).vm.disabled).toBe(true)
            }
          }

          done()
        })
      })
    })
    })
  })
}

const change = function(el, value, event = 'keyup') {
  el.get('input').setValue(value)
  el.get('input').trigger(event)
}

const setDate = function(el, value) {
  el.vm.update(value, true)
}

const check = function(el) {
  el.get('input').setChecked(true)
  // el.get('input').trigger('change')
}

const uncheck = function(el) {
  el.get('input').setChecked(false)
  // el.get('input').trigger('change')
}

const select = function(el) {
  el.get('input').setSelected(true)
  // el.get('input').trigger('change')
}

const unselect = function(el) {
  el.get('input').setSelected(false)
  // el.get('input').trigger('change')
}

const setInstances = function(el, count) {
  el.vm.clear()

  for (var i = 0; i < count; i++) {
    el.vm.insert()
  }
}

const createTrix = (details) => {
  const originalConsoleError = console.error

  console.error = (e) => { if (!e.toString().includes('Unknown custom element: <trix-editor>')) throw new Error(e) }

  let form = createForm(details)
  
  console.error = originalConsoleError

  return form
}

const confirmSelectOptions = (component, done, LocalVue, options = {a:'aaa',b:'bbb',c:'ccc'}) => {
  for (let i = 0; i < _.keys(options).length; i++) {
    let option = component.findAll('option').at(i)

    expect(option.attributes().value).toBe(_.keys(options)[i])
    expect(option.element.innerHTML.trim()).toBe(_.values(options)[i])
  }

  component.vm.native = false

  LocalVue.nextTick(() => {
    for (let i = 0; i < _.keys(options).length; i++) {
      let option = component.findAll('.multiselect__option span').at(i)

      expect(option.element.innerHTML.trim()).toBe(_.values(options)[i])
    }

    done()
  })
}

export {
  installLaraform,
  createForm,
  createLaraformInstaller,
  testDynamics,
  testThemeComponents,
  testThemeElements,
  change,
  select,
  unselect,
  check,
  uncheck,
  setInstances,
  setDate,
  createTrix,
  confirmSelectOptions,
}


// const { LocalVue, config } = installLaraform()

// let formComponent = LocalVue.extend({
//   mixins: [Laraform],
//   data() {
//     return {
//       schema: {
//         name: {
//           type: 'text'
//         }
//       }
//     }
//   }
// })

// let form = mount(formComponent, {
//   LocalVue,
//   mocks: {
//     $laraform: {
//       config: config
//     }
//   }
// })

// let name = form.findComponent({ name: 'TextElement' })

// expect(name.vm.available).toBe(false)




// const LocalVue = createLocalVue()

// const { LaraformInstaller, config } = createLaraformInstaller()

// let availableMock = jest.fn(() => {
//   return false
// })

// defaultTheme.elements.TextElement.mixins[0].mixins[0].computed.available = availableMock

// LaraformInstaller.theme('default', defaultTheme)

// LocalVue.use(LaraformInstaller)

// let formComponent = LocalVue.extend({
//   mixins: [Laraform],
//   data() {
//     return {
//       schema: {
//         name: {
//           type: 'text'
//         }
//       }
//     }
//   }
// })

// let form = mount(formComponent, {
//   LocalVue,
//   mocks: {
//     $laraform: {
//       config: config
//     }
//   }
// })

// let name = form.findComponent({ name: 'TextElement' })

// expect(name.vm.available).toBe(false)