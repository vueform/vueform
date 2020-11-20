import BaseElement from './../../mixins/BaseElement'
import useTime from './../../composables/elements/useTime'

export default {
  name: 'TimeElement',
  mixins: [BaseElement],
  init: useTime,
}