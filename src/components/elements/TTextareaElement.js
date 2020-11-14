import BaseElement from './../../mixins/BaseElement'
import useTTextarea from './../../composables/elements/useTTextarea'

export default {
  name: 'TTextareaElement',
  mixins: [BaseElement],
  init: useTTextarea,
}