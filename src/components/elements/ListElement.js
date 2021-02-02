import Vue from 'vue'
import BaseElement from './../../mixins/BaseElement'
import SortableDirective from './../../directives/sortable'
import useList from './../../composables/elements/useList'

export default {
  name: 'ListElement',
  directives: {
    sortable: SortableDirective
  },
  mixins: [BaseElement],
  init: useList,
}