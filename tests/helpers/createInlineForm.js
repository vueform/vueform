import { mount } from '@vue/test-utils'
import { h, resolveComponent, ref } from 'composition-api'

// Core
import { Laraform, useLaraform } from './../../src/index'

// Assets
import en from './../../src/locales/en'

// Services
import condition from './../../src/services/condition'
import validation from './../../src/services/validation'
import messageBag from './../../src/services/messageBag'
import autosize from './../../src/services/autosize'
import location from './../../src/services/location'

// 3rd party
import _ from 'lodash'
import axios from 'axios'

// Helpers
import { installLaraform, createElement } from './index'

// Mocks
import TrixEditor from './../mocks/TrixEditor'

export default function createForm (data, options = {}, render = null) {
  let { LaraformInstaller, config, store } = installLaraform(options)

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
        h(resolveComponent('Laraform'), Object.assign({}, data.props, {
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
  }, options.config || {})

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
      plugins: [LaraformInstaller],
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
    form: wrapper.findComponent({ name: 'Laraform' }),
  }
}