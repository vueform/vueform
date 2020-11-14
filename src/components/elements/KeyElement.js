import BaseElement from './../../mixins/BaseElement'
import useKey from './../../composables/elements/useKey'

export default {
  name: 'KeyElement',
  mixins: [BaseElement],
  init: useKey,
}