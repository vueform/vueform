import BaseElement from './../../mixins/BaseElement'
import useImage from './../../composables/elements/useImage'

export default {
  name: 'ImageElement',
  emits: ['remove'],
  mixins: [BaseElement],
  props: {
    embed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  init: useImage,
}