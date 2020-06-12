import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import { Laraform } from './../index'
import installer from './../installer'
import bootstrap from './../themes/bootstrap'
import defaultTheme from './../themes/default'
import config from './../config'
import condition from './../plugins/condition/services/condition'
import validation from './../services/validation'
import en from './../locales/en'
import _ from 'lodash'
import axios from 'axios'
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

  LocalVue.use(LaraformInstaller)
  
  return {
    LocalVue,
    config,
  }
}

const createForm = function(data, options = {}) {
  let { LocalVue, config } = installLaraform(options)

  let form = LocalVue.extend({
    mixins: [Laraform],
    data() {
      return data
    }
  })

  let mountOptions = {
    LocalVue,
    propsData: options.propsData || {},
    mocks: {
      $laraform: {
        config: config,
        plugins: config.plugins,
        services: {
          condition,
          validation,
          axios,
        },
        locales: options.locales || {
          en: en
        }
      }
    }
  }

  if (options.attach) {
    mountOptions.attachTo = document.querySelector('body')
  }

  return mount(form, mountOptions)
}


export {
  installLaraform,
  createForm,
  createLaraformInstaller,
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