import BaseElement from './../../mixins/BaseElement'
import useSelect from './../../composables/elements/useSelect'

export default {
  name: 'SelectElement',
  mixins: [BaseElement],
  init: useSelect,
}