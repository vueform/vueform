import { config, components, useVueform, Vueform } from './core'
import theme from './../themes/vueform'
import locales from './../locales'
import installer from './installer'

export default installer(config, components)

export {
  Vueform,
  useVueform,
  theme,
  locales,
} 