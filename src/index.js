import installer from './installer'
import config from './config'
import components from './components'
import useVueform from './composables/useVueform'
import Vueform from './components/Vueform'

export default installer(config, components)

export {
  Vueform,
  useVueform,
} 