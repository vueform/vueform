import BaseElement from './../../mixins/BaseElement'
import useText from './../../composables/elements/useText'

export default {
  name: 'TextElement',
  emits: ['change'],
  mixins: [BaseElement],
  init: useText,
}