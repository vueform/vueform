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
  testAttribute,
  triggerEvent,
  testValue,
  setValue,
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

const createLaraformInstaller (options = {}) {
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
  createElement,
  testAttribute,
  triggerEvent,
  testValue,
  setValue,
}