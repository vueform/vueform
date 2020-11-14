import BaseElement from './../../mixins/BaseElement'
import useText from './../../composables/elements/useText'

export default {
  name: 'TextElement',
  mixins: [BaseElement],
  init: useText,
}