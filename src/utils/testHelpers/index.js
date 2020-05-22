import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import { Laraform } from './../../index'
import installer from './../../installer'
import bootstrap from './../../themes/bootstrap'
import defaultTheme from './../../themes/default'
import config from './../../config'
import _ from 'lodash'

const themes = {
  bootstrap,
  default: defaultTheme,
}

const installLaraform = function(options = {}) {
  const theme = options.theme || config.theme
  
  const LaraformInstaller = installer(Object.assign({}, config, {
    theme: theme
  }, options.config || {}))

  LaraformInstaller.theme(theme, themes[theme])

  if (options.elements !== undefined) {
    LaraformInstaller.elements(options.elements)
  }

  if (options.themes !== undefined) {
    _.each(options.themes, (optionTheme, name) => {
      LaraformInstaller.theme(name, optionTheme)
    })
  }

  const LocalVue = createLocalVue()

  LocalVue.use(LaraformInstaller)
  
  return LocalVue
}

const createForm = function(data, options = {}) {
  let LocalVue = installLaraform(options)

  let form = LocalVue.extend({
    mixins: [Laraform],
    data() {
      return data
    }
  })

  return mount(form, {
    LocalVue,
    propsData: options.propsData || {}
  })
}


export {
  installLaraform,
  createForm,
}