import BaseComponent from './../mixins/BaseComponent'
import Localized from './../mixins/Localized'

export default {
  mixins: [BaseComponent, Localized],
  name: 'FormErrors',
  computed: {
    errors() {
      return this.form$.errorBag.errors
    }
  },
}