import installer from './installer'
import config from './config'
import useVueform from './composables/useVueform'
import Vueform from './components/Vueform'

export default installer(config)

export {
  Vueform,
  useVueform,
} 