import BaseElement from './../../mixins/BaseElement'
import useCheckbox from './../../composables/elements/useCheckbox'

export default {
  name: 'CheckboxElement',
  mixins: [BaseElement],
  init: useCheckbox,
}