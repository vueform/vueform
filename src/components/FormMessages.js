import BaseComponent from './../mixins/BaseComponent'

export default {
  mixins: [BaseComponent],
  name: 'FormMessages',
  computed: {
    messages() {
      return this.form$.messageBag.messages
    }
  },
}