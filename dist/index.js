import { config, components, useVueform, Vueform } from './core'
import installer from './installer'

export default installer(config, components)

export {
  Vueform,
  useVueform,
} 