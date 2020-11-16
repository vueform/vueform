import BaseElement from './../../mixins/BaseElement'
import useToggle from './../../composables/elements/useToggle'

export default {
  name: 'ToggleElement',
  mixins: [BaseElement],
  init: useToggle,
}