import BaseElement from './../../mixins/BaseElement'
import SortableDirective from './../../directives/sortable'
import useList from './../../composables/elements/useList'
import { onBeforeUpdate } from 'composition-api'

export default {
  name: 'ListElement',
  directives: {
    sortable: SortableDirective
  },
  mixins: [BaseElement],
  init(props, context) {
    const list = useList(props, context)

    return {
      ...list,
    }
  },
}