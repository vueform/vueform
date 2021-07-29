// Core
import installer from './../../../src/installer'
import config from './../../../src/config'

// Assets
import bootstrap from './../../../src/themes/default'
import defaultTheme from './../../../src/themes/default'
import en from './../../../src/locales/en'

const themes = {
  bootstrap,
  default: defaultTheme,
}

export default function createLaraformInstaller(options = {}) {
  let theme = options.theme || config.theme

  let finalConfig = Object.assign({}, config, {
    vue: 2,
    themes: Object.assign({}, {
      [theme]: themes[theme]
    }, options.themes || {}),
    theme: theme,
    elements: options.elements || {},
    components: options.components || {},
    rules: options.rules || {},
    extensions: options.extensions || {},
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