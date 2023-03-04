import { mount } from '@vue/test-utils'
import { h, resolveComponent, ref } from 'vue'

// Core
import { Vueform, useVueform } from './../../src/index'

// Assets
import en from './../../locales/en'

// Services
import condition from './../../src/services/condition'
import validation from './../../src/services/validation'
import messageBag from './../../src/services/messageBag'
import autosize from './../../src/services/autosize'
import location from './../../src/services/location'
import columns from './../../src/services/columns'

// 3rd party
import _ from 'lodash'
import axios from 'axios'

// Helpers
import { installVueform, createElement } from './index'

// Mocks
import TrixEditor from './../mocks/TrixEditor'

export default function createForm (data, options = {}, render = null) {
  let { VueformInstaller, config, store } = installVueform(options)

  let app = Object.assign({}, {
    setup() {
      const form = ref(null)

      return {
        form,
      }
    },
    data() {
      return {
        data: data.model,
      }
    },
    render() {
      return h('div', [
        h(resolveComponent('Vueform'), Object.assign({}, data.props, {
          ref: 'form',
        }, data.model ? {
          modelValue: this.data,
          'onUpdate:modelValue': (value) => { this.data = value }
        } : {}))
      ])
    },
    mounted() {
      if (options.mounted) {
        options.mounted.call(this.form)
      }
    }
  }, render ? {
    render,
  } : {})

  let finalConfig = Object.assign({}, config, options.config || {})

  // let $vueform = {
  //   test: true,
  //   config: finalConfig,
  //   classes: finalConfig.classes,
  //   templates: finalConfig.templates,
  //   rules: finalConfig.rules,
  //   theme: finalConfig.theme,
  //   locales: options.locales || {
  //     en: en
  //   },
  //   vueVersion: 3,
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

  // let $vueformMixin = {
  //   data() {
  //     return {
  //       $vueform,
  //     }
  //   }
  // }

  let mountOptions = {
    propsData: options.propsData || {},
    global: {
      // mixins: [$vueformMixin],
      plugins: [
        [VueformInstaller, {
          apiKey: 'dvzr-74zl-w99t-dmdv-syr7',
        }]
      ],
      components: {
        TrixEditor,
      },
    }
  }

  if (options.attach) {
    mountOptions.attachTo = document.querySelector('body')
  }

  const wrapper = mount(app, mountOptions)

  return {
    app: wrapper,
    form: wrapper.findComponent({ name: 'Vueform' }),
  }
}