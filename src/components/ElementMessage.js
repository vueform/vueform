import ElementComponent from './../mixins/ElementComponent'

export default {
  mixins: [ElementComponent],
  name: 'ElementMessage',
  computed: {
    message() {
      return this.el$.messageBag ? this.el$.messageBag.message : null
    }
  }
}