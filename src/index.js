import { installer } from './core'
export * from './core'

import * as components from './components'
import * as rules from './services/validation/rules'
import moment from 'moment'

const vueform = installer(undefined, { ...components }, { ...rules }, { moment })

export default vueform

export {
  vueform
}