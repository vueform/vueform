import BaseElement from './../../mixins/BaseElement'
import BaseValidation from './../../mixins/BaseValidation'
import useCheckboxgroup from './../../composables/elements/useCheckboxgroup'

export default {
  name: 'CheckboxgroupElement',
  mixins: [BaseElement, BaseValidation],
  init: useCheckboxgroup,
}