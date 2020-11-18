import BaseElement from './../../mixins/BaseElement'
import usePassword from './../../composables/elements/usePassword'

export default {
  name: 'PasswordElement',
  mixins: [BaseElement],
  init: usePassword,
}