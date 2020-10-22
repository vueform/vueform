import installer from './installer'
import config from './config'
import init from './init'
import useLaraform from './composables/useLaraform'
import Laraform from './components/Laraform'

export default installer(config)

export {
  Laraform,
  useLaraform,
  init,
} 