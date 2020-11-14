import BaseElement from './../../mixins/BaseElement'
import useHidden from './../../composables/elements/useHidden'

export default {
  name: 'HiddenElement',
  mixins: [BaseElement],
  init: useHidden,
}