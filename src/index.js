import { installer } from './core'
export * from './core'

import * as components from './components'
import * as rules from './services/validation/rules'

const vueform = installer(undefined, { ...components }, { ...rules })

export default vueform

export {
  vueform
}