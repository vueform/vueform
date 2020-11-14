import BaseElement from './../../mixins/BaseElement'
import useTText from './../../composables/elements/useTText'

export default {
  name: 'TTextElement',
  mixins: [BaseElement],
  init: useTText,
}