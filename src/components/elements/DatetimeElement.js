import BaseElement from './../../mixins/BaseElement'
import useDatetime from './../../composables/elements/useDatetime'

export default {
  name: 'DatetimeElement',
  mixins: [BaseElement],
  init: useDatetime,
}