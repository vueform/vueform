import 'regenerator-runtime/runtime'
import components from './components'
import installer from './installer'
import config from './config'

export default installer(config, components)