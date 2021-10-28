import { mount } from '@vue/test-utils'
import { h, resolveComponent, ref } from 'composition-api'

// Core
import { Laraform, useLaraform } from './../../../src/index'

// Assets
import en from './../../../src/locales/en'

// Services
import condition from './../../../src/services/condition'
import validation from './../../../src/services/validation'
import messageBag from './../../../src/services/messageBag'
import autosize from './../../../src/services/autosize'
import location from './../../../src/services/location'
import columns from './../../../src/services/columns'

// 3rd party
import axios from 'axios'

// Helpers
import { installLaraform } from './index'

// Mocks
import TrixEditor from './../../mocks/TrixEditor'

export default function createForm (data, options = {}, render = null) {
  let { LocalVue, config, store } = installLaraform(options)

  LocalVue.component(TrixEditor.name, TrixEditor)

  let app = Object.assign({}, {
    components: {
      Laraform,
    },
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
    render(h) {
      return h('div', [
        h('laraform', {
          props: Object.assign({}, data.props, data.model ? {
            value: this.data
          } : {}),
          ref: 'form',
          on: {
            input: (value) => { this.data = value }
          }
        }),
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

  let finalConfig = Object.assign({}, config, options.config || {}, {
    languages: {en:'English',fr:'French'},
  })

  let $laraform = {
    test: true,
    config: finalConfig,
    classes: finalConfig.classes,
    templates: finalConfig.templates,
    rules: finalConfig.rules,
    theme: finalConfig.theme,
    locales: options.locales || {
      en: en
    },
    services: {
      condition,
      validation,
      axios,
      messageBag,
      autosize,
      location,
      columns,
    },
  }

  let mountOptions = {
    localVue: LocalVue,
    store,
    propsData: options.propsData || {},
    mocks: {
      $laraform: $laraform,
      // $i18n: options.vueI18n ? new class VueI18n { get locale() { return options.vueI18nLocale || 'en' } } : null,
      // $t: options.vueI18n ? (str) => { return str + ' vue-i18n' } : null,
    }
  }

  if (options.attach) {
    mountOptions.attachTo = document.querySelector('body')
  }

  const wrapper = mount(app, mountOptions)

  return {
    app: wrapper,
    form: wrapper.findComponent({ name: 'Laraform' }),
  }
}