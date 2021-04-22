import installer from './installer'
import config from './config'
import useLaraform from './composables/useLaraform'
import Laraform from './components/Laraform'

export default installer(config)

export {
  Laraform,
  useLaraform,
} 