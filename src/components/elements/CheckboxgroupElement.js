import BaseElement from './../../mixins/BaseElement'
import useCheckboxgroup from './../../composables/elements/useCheckboxgroup'

export default {
  name: 'CheckboxgroupElement',
  mixins: [BaseElement],
  init: useCheckboxgroup,
}