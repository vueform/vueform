import BaseComponent from './../mixins/BaseComponent'

export default {
  name: 'FormButtons',
  mixins: [BaseComponent],
  inject: ['theme'],
  props: {
    buttons: Array,
  },
}