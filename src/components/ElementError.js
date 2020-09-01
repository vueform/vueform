import ElementComponent from './../mixins/ElementComponent'

export default {
  mixins: [ElementComponent],
  name: 'ElementError',
  computed: {
    error() {
      return this.el$.error
    }
  }
}