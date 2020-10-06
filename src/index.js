import installer from './installer'
import installer3 from './installer3'
import config from './config'
import Laraform from './components/Laraform'
import useLaraform from './composables/useLaraform'
import setup from './setup'

const LaraformVue3 = installer3(config)

export default installer(config)

export {
  Laraform,
  LaraformVue3,
  useLaraform,
  setup,
}