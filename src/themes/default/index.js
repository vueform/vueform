import utils from './../../utils'
import essentials from './essentials'

import AddressElement from './components/elements/AddressElement'
import AddressGroupElement from './components/elements/AddressGroupElement'
import TrixElement from './components/elements/TrixElement'
import TTrixElement from './components/elements/TTrixElement'

// @todo: remove utils.

export default utils.extendTheme(essentials, {
  elements: {
    AddressElement,
    AddressGroupElement,
    TrixElement,
    TTrixElement,
  },
})