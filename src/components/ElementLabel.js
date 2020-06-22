import ElementComponent from './../mixins/ElementComponent'
import HasLabel from './../mixins/HasLabel'

export default {
  name: 'ElementLabel',
  mixins: [ElementComponent, HasLabel],
  computed: {
    descriptor() {
      return this.el$.schema
    },
    name() {
      return this.el$.name
    },
  }
}