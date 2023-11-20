import useVueform from './composables/useVueform'
import useClasses from './composables/elements/useClasses'
import Vueform from './components/Vueform'
import Validator from './services/validation/validator'
import installer from './installer'
import element from './element'
import defineConfig from './defineConfig'

const VueformElement = element
const defineElement = element

import {
  Vueform as VueformComponent,
  FormElements,
} from './components'

const vueform = installer(undefined, {
  Vueform: VueformComponent,
  FormElements,
})

export {
  useVueform,
  useClasses,
  Vueform,
  Validator,
  vueform,
  element,
  VueformElement,
  defineElement,
  defineConfig,
  installer,
}

export * from './components'
export * from './services/validation/rules'

export default vueform