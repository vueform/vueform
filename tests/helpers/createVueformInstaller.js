// Core
import installer from './../../src/installer'
import config from './../../src/config'
import components from './../../src/components'
import rules from './../../src/services/validation/rules'

// Assets
import defaultTheme from './../../themes/vueform'
import en from './../../locales/en'
import de from './../../locales/de'

export default function createVueformInstaller (options = {}) {
  let theme = options.theme || defaultTheme

  let finalConfig = Object.assign({}, {
    ...config,
    classHelpers: false,
  }, {
    theme: theme,
    templates: options.templates || {},
    rules: options.rules || {},
    locales: Object.assign({}, options.locales || {
      en, de,
    }),
    locale: 'en',
    languages: {en:'English',fr:'French'},
  }, options.config || {}, {
    endpoints: {
      ...config.endpoints,
      ...(options.config?.endpoints || {})
    }
  })

  const VueformInstaller = installer(finalConfig, components, rules)

  return {
    VueformInstaller,
    config: finalConfig,
  }
}