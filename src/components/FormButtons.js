import BaseComponent from './../mixins/BaseComponent'
import mref from './../directives/mref'

export default {
  name: 'FormButtons',
  directives: {
    mref,
  },
  mixins: [BaseComponent],
  inject: ['theme'],
  props: {
    buttons: Array,
  },
}