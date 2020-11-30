import BaseElement from './../../mixins/BaseElement'
import useButtons from './../../composables/elements/useButtons'

export default {
  name: 'ButtonsElement',
  mixins: [BaseElement],
  init: useButtons,
}