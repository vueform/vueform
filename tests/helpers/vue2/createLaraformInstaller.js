// Core
import installer from './../../../src/installer'
import config from './../../../src/config'

// Assets
import defaultTheme from './../../../src/themes/default'
import en from './../../../src/locales/en'

export default function createLaraformInstaller (options = {}) {
  let theme = options.theme || defaultTheme

  let finalConfig = Object.assign({}, config, {
    theme: theme,
    templates: options.templates || {},
    rules: options.rules || {},
    locales: Object.assign({}, options.locales || {
      en,
    })
  }, options.config || {})

  const LaraformInstaller = installer(finalConfig)

  return {
    LaraformInstaller,
    config: finalConfig,
  }
}