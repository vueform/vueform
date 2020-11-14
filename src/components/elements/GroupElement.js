import BaseElement from './../../mixins/BaseElement'
import useGroup from './../../composables/elements/useGroup'

export default {
  name: 'GroupElement',
  mixins: [BaseElement],
  init: useGroup,
}