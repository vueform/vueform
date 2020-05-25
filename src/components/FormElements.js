import BaseComponent from './../mixins/BaseComponent'
import ref from './../directives/ref'
import _ from 'lodash'

export default {
  name: 'FormElements',
  directives: {
    ref,
  },
  mixins: [BaseComponent],
  props: {
    schema: {
      type: Object,
      required: true
    }
  },
  methods: {
    component(element) {
      if (element.component) {
        return element.component
      }

      let name = `${_.upperFirst(element.type)}Element`

      let component = this.theme.elements[name]

      if (component === undefined) {
        throw new TypeError('[Laraform] Unknown element type: ' + element.type)
      }

      return component
    }
  }
}