import BaseElement from './../../mixins/BaseElement'
import useTTrix from './../../composables/elements/useTTrix'

export default {
  name: 'TTrixElement',
  mixins: [BaseElement],
  init: useTTrix,
}