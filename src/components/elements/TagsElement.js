import BaseElement from './../../mixins/BaseElement'
import useTags from './../../composables/elements/useTags'

export default {
  name: 'TagsElement',
  mixins: [BaseElement],
  init: useTags,
}