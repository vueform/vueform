import BaseElement from './../../mixins/BaseElement'
import useLocation from './../../composables/elements/useLocation'

export default {
  name: 'LocationElement',
  mixins: [BaseElement,],
  init: useLocation,
}