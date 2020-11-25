import BaseElement from './../../mixins/BaseElement'
import useFile from './../../composables/elements/useFile'

export default {
  name: 'FileElement',
  emits: ['remove'],
  mixins: [BaseElement],
  props: {
    embed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  init: useFile,
}