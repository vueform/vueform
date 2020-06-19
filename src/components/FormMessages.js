import BaseComponent from './../mixins/BaseComponent'
import Localized from './../mixins/Localized'

export default {
  mixins: [BaseComponent, Localized],
  name: 'FormMessages',
  computed: {
    messages() {
      return this.form$.messageBag.messages
    }
  },
}