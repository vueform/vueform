import BaseElement from './../../mixins/BaseElement'
import useRadio from './../../composables/elements/useRadio'

export default {
  name: 'RadioElement',
  mixins: [BaseElement],
  init: useRadio,
}