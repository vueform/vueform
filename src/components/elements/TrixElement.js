import BaseElement from './../../mixins/BaseElement'
import useTrix from './../../composables/elements/useTrix'

export default {
  name: 'TrixElement',
  mixins: [BaseElement],
  init: useTrix,
}