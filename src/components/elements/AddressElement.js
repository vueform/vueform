import BaseElement from './../../mixins/BaseElement'
import useAddress from './../../composables/elements/useAddress'

export default {
  name: 'AddressElement',
  mixins: [BaseElement],
  init: useAddress,
}