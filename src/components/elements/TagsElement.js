import MultiselectElement from './MultiselectElement'
import normalize from './../../utils/normalize'
import useTags from './../../composables/elements/useTags'

export default {
  name: 'TagsElement',
  mixins: [MultiselectElement],
  init: useTags,
}