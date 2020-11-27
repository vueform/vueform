import BaseElement from './../../mixins/BaseElement'
import useStatic from './../../composables/elements/useStatic'

export default {
  name: 'StaticElement',
  mixins: [BaseElement],
  init: useStatic,
}