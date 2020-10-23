import { mount } from '@vue/test-utils'
import { h } from 'composition-api'

import {
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
  testNativeSelectModel,
  testNonNativeSelectModel,
  testNativeMultiselectModel,
  testNonNativeMultiselectModel,
  testTagsModel,
  tryInputValues,
  testComputedOption,
} from './testHelpers.vue2'

// Core
import { Laraform, useLaraform } from './../index'
import installer from './../installer'
import config from './../config'

// Assets
import bootstrap from './../themes/bootstrap'
import defaultTheme from './../themes/default'
import en from './../locales/en'

// Services
import condition from './../services/condition'
import validation from './../services/validation'
import messageBag from './../services/messageBag'
import autosize from './../services/autosize'
import location from './../services/location'

// 3rd party
import _ from 'lodash'
import axios from 'axios'
// import Vuex from 'vuex'

window._ = _

const themes = {
  // bootstrap,
  default: defaultTheme,
}

const createLaraformInstaller = function(options = {}) {
  let theme = options.theme || config.theme

  let finalConfig = Object.assign({}, config, {
    vue: 3,
    themes: Object.assign({}, {
      [theme]: themes[theme]
    }, options.themes || {}),
    theme: theme,
    elements: options.elements || {},
    components: options.components || {},
    rules: options.rules || {},
    extensions: options.extensions || {},
    locales: Object.assign({}, options.locales || {
      en,
    })
  }, options.config || {})

  const LaraformInstaller = installer(finalConfig)

  return {
    LaraformInstaller,
    config: finalConfig,
  }
}

const installLaraform = function(options = {}) {
  const { LaraformInstaller, config } = createLaraformInstaller(options)

  // const LocalVue = createLocalVue()

  // LocalVue.use(CompositionApi)

  let store = null

  // if (options.vuex) {
  //   LocalVue.use(Vuex)

  //   store = new Vuex.Store({
  //     state: options.vuex,
  //   })

  //   if (options.laraformStore !== false) {
  //     LaraformInstaller.store(store)
  //   }
  // }

  // LocalVue.use(LaraformInstaller)

  return {
    LaraformInstaller,
    config,
    store
  }
}

const createForm = function(data, options = {}) {
  let { LaraformInstaller, config, store } = installLaraform(options)

  let form = {
    mixins: [Laraform],
    setup(props, context) {
      const laraform = useLaraform(props, context)

      return {
        ...laraform
      }
    },
    data() {
      return data
    }
  }

  let $laraform = Object.assign({}, config, {
    extensions: config.extensions,
    services: {
      condition,
      validation,
      axios,
      messageBag,
      autosize,
      location,
    },
    locales: options.locales || {
      en: en
    }
  })

  let $laraformMixin = {
    data() {
      return {
        $laraform,
      }
    }
  }

  let mountOptions = {
    propsData: options.propsData || {},
    global: {
      mixins: [$laraformMixin],
      plugins: [LaraformInstaller]
    }
  }

  if (options.attach) {
    mountOptions.attachTo = document.querySelector('body')
  }

  return mount(form, mountOptions)
}

const findAllComponents = function(parent, query) {
  let res = parent.findAllComponents(query)

  return {
    at: (i) => { return res[i] }
  }
}

const renderComponent = function() {
  let args = arguments

  return function () {
    return h.apply(this, args)
  }
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
  testNativeSelectModel,
  testNonNativeSelectModel,
  testNativeMultiselectModel,
  testNonNativeMultiselectModel,
  testTagsModel,
  tryInputValues,
  findAllComponents,
  testComputedOption,
  renderComponent,
}