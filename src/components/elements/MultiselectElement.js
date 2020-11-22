import SelectElement from './SelectElement'
import useMultiselect from './../../composables/elements/useMultiselect'

export default {
  name: 'MultiselectElement',
  mixins: [SelectElement],
  init: useMultiselect,
}