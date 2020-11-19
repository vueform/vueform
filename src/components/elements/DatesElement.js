import BaseElement from './../../mixins/BaseElement'
import useDates from './../../composables/elements/useDates'

export default {
  name: 'DatesElement',
  mixins: [BaseElement],
  init: useDates,
}