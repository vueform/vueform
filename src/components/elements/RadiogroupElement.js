import BaseElement from './../../mixins/BaseElement'
import useRadiogroup from './../../composables/elements/useRadiogroup'

export default {
  name: 'RadiogroupElement',
  mixins: [BaseElement],
  init: useRadiogroup,
}