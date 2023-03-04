import { mount, shallowMount } from '@vue/test-utils'

// Core
import { Vueform, useVueform } from './../../../src/index'

// Assets
import en from './../../../locales/en'

// Services
import condition from './../../../src/services/condition'
import validation from './../../../src/services/validation'
import messageBag from './../../../src/services/messageBag'
import autosize from './../../../src/services/autosize'
import location from './../../../src/services/location'
import columns from './../../../src/services/columns'

// 3rd party
import _ from 'lodash'
import axios from 'axios'

// Helpers
import { installVueform } from './index'

// Mocks
import TrixEditor from './../../mocks/TrixEditor'

window._ = _

export default function createForm (data, options = {}, render = null) {
  let { LocalVue, config, store } = installVueform(options)

  LocalVue.component(TrixEditor.name, TrixEditor)

  let form = LocalVue.extend(Object.assign({}, {
    mixins: [Vueform],
    setup(props, context) {
      const setup = options.setup ? options.setup(props, context) : {}
      const vueform = useVueform(props, context, setup)

      return {
        ...vueform,
        ...setup,
      }
    },
    data() {
      return Object.keys(data).length ? {
        vueform: data
      } : {}
    },
    mounted() {
      if (options.mounted) {
        options.mounted.call(this)
      }
    }
  }, render ? {
    render,
  } : {}))

  let finalConfig = Object.assign({}, config)

  // let $vueform = {
  //   test: true,
  //   config: finalConfig,
  //   classes: finalConfig.classes,
  //   templates: finalConfig.templates,
  //   rules: finalConfig.rules,
  //   theme: finalConfig.theme,
  //   plugins: finalConfig.plugins,
  //   locales: options.locales || {
  //     en: en
  //   },
  //   vueVersion: 2,
  //   services: {
  //     condition,
  //     validation,
  //     axios,
  //     messageBag,
  //     autosize,
  //     location,
  //     columns,
  //   },
  // }

  let mountOptions = {
    localVue: LocalVue,
    store,
    propsData: options.propsData || {},
    mocks: {
      // $vueform: $vueform,
      // $i18n: options.vueI18n ? new class VueI18n { get locale() { return options.vueI18nLocale || 'en' } } : null,
      // $t: options.vueI18n ? (str) => { return str + ' vue-i18n' } : null,
    }
  }

  if (options.attach) {
    mountOptions.attachTo = document.querySelector('body')
  }

  return mount(form, mountOptions)
}