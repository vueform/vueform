// Core
import installer from './../../src/installer'
import config from './../../src/config'
import components from './../../src/components'

// Assets
import defaultTheme from './../../themes/vueform'
import en from './../../locales/en'

export default function createVueformInstaller (options = {}) {
  let theme = options.theme || defaultTheme

  let finalConfig = Object.assign({}, config, {
    theme: theme,
    templates: options.templates || {},
    rules: options.rules || {},
    locales: Object.assign({}, options.locales || {
      en,
    }),
    languages: {en:'English',fr:'French'},
  }, options.config || {})

  const VueformInstaller = installer(finalConfig, components)

  return {
    VueformInstaller,
    config: finalConfig,
  }
}