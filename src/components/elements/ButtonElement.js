import BaseElement from './../../mixins/BaseElement'
import useButton from './../../composables/elements/useButton'

export default {
  name: 'ButtonElement',
  mixins: [BaseElement],
  init: useButton,
}