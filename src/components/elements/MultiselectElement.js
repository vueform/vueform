import BaseElement from './../../mixins/BaseElement'
import useMultiselect from './../../composables/elements/useMultiselect'

export default {
  name: 'MultiselectElement',
  mixins: [BaseElement],
  init: useMultiselect,
}