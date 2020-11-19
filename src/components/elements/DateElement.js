import BaseElement from './../../mixins/BaseElement'
import useDate from './../../composables/elements/useDate'

export default {
  name: 'DateElement',
  mixins: [BaseElement],
  init: useDate,
}