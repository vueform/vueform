import config from './config'
import components from './components'
import useVueform from './composables/useVueform'
import Vueform from './components/Vueform'
import Validator from './services/validation/validator'
import installer from './installer'
import element from './element'

const vueform = installer(config, components)

export {
  config,
  components,
  useVueform,
  Vueform,
  Validator,
  vueform,
  element,
 }