import BaseElement from './../../mixins/BaseElement'
import SortableDirective from './../../directives/sortable'
import useMultifile from './../../composables/elements/useMultifile'

export default {
  name: 'MultifileElement',
  directives: {
    sortable: SortableDirective
  },
  mixins: [BaseElement],
  init: useMultifile,
}