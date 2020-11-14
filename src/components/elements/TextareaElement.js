import BaseElement from './../../mixins/BaseElement'
import useTextarea from './../../composables/elements/useTextarea'

export default {
  name: 'TextareaElement',
  mixins: [BaseElement],
  init: useTextarea,
}