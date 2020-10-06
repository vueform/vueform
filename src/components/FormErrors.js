import BaseComponent from './../mixins/BaseComponent'

export default {
  mixins: [BaseComponent],
  name: 'FormErrors',
  computed: {
    errors() {
      return this.form$.messageBag.errors
    }
  },
}