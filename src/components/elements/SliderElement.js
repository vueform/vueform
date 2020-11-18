import BaseElement from './../../mixins/BaseElement'
import useSlider from './../../composables/elements/useSlider'

export default {
  name: 'SliderElement',
  mixins: [BaseElement],
  init: useSlider,
}