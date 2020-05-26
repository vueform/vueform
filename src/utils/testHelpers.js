import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import { Laraform } from './../index'
import installer from './../installer'
import bootstrap from './../themes/bootstrap'
import defaultTheme from './../themes/default'
import config from './../config'
import _ from 'lodash'

const themes = {
  bootstrap,
  default: defaultTheme,
}

const installLaraform = function(options = {}) {
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

  const LocalVue = createLocalVue()

  LocalVue.use(LaraformInstaller)
  
  return {
    LocalVue,
    config: finalConfig
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

  return mount(form, {
    LocalVue,
    propsData: options.propsData || {},
    mocks: {
      $laraform: {
        config: config
      }
    }
  })
}


export {
  installLaraform,
  createForm,
}