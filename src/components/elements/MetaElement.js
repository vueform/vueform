import BaseElement from './../../mixins/BaseElement'
import useMeta from './../../composables/elements/useMeta'

export default {
  name: 'MetaElement',
  mixins: [BaseElement],
  init: useMeta,
}