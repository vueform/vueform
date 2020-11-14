import BaseElement from './../../mixins/BaseElement'
import useObject from './../../composables/elements/useObject'

export default {
  name: 'ObjectElement',
  mixins: [BaseElement],
  init: useObject,
}