import BaseElement from './../../mixins/BaseElement'
import SortableDirective from './../../directives/sortable'
import useGallery from './../../composables/elements/useGallery'

export default {
  name: 'GalleryElement',
  directives: {
    sortable: SortableDirective
  },
  mixins: [BaseElement],
  init: useGallery,
}