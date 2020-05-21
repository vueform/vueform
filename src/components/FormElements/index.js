import ManagesElements from './../../mixins/ManagesElements'
import BaseComponent from './../../mixins/BaseComponent'
import ref from './../../directives/ref'
import _ from 'lodash'

export default {
  name: 'FormElements',
  directives: {
    ref,
  },
  mixins: [ManagesElements, BaseComponent],
  props: {
    schema: {
      type: Object,
      required: true
    }
  },
  methods: {
    component(type) {
      let name = `${_.upperFirst(type)}Element`

      let component = this.theme.elements[name]

      if (component === undefined) {
        throw new TypeError('Unknown element type: ' + type)
      }

      return component
    }
  }
}