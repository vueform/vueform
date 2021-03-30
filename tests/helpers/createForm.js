import { mount } from '@vue/test-utils'
import { onMounted } from 'composition-api'

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
import { installLaraform } from './index'

// Mocks
import TrixEditor from './../mocks/TrixEditor'

export default function createForm (data, options = {}, render = null) {
  let { LaraformInstaller, config, store } = installLaraform(options)

  let form = Object.assign({}, {
    mixins: [Laraform],
    setup(props, context) {
      const setup = options.setup ? options.setup(props, context) : {}
      const laraform = useLaraform(props, context, setup)

      return {
        ...laraform,
        ...setup,
      }
    },
    data() {
      return Object.keys(data).length ? {
        laraform: data
      } : {}
    },
    mounted() {
      if (options.mounted) {
        options.mounted.call(this)
      }
    }
  }, render ? {
    render,
  } : {})

  let $laraform = {
    test: true,
    extensions: config.extensions,
    config: Object.assign({}, config, options.config || {}),
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
  }

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
        TrixEditor
      } ,
    }
  }

  if (options.attach) {
    mountOptions.attachTo = document.querySelector('body')
  }
  
  return mount(form, mountOptions)
}