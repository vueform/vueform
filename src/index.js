import config from './config'
import components from './components'
import useVueform from './composables/useVueform'
import useClasses from './composables/elements/useClasses'
import Vueform from './components/Vueform'
import Validator from './services/validation/validator'
import installer from './installer'
import element from './element'
import defineConfig from './defineConfig'

const vueform = installer(config, components)

export {
  config,
  components,
  useVueform,
  useClasses,
  Vueform,
  Validator,
  vueform,
  element,
  defineConfig,
 }

 export default vueform