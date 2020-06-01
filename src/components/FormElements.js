import BaseComponent from './../mixins/BaseComponent'
import HasElements from './../mixins/HasElements'
import ref from './../directives/ref'
import _ from 'lodash'

export default {
  name: 'FormElements',
  directives: {
    ref,
  },
  mixins: [BaseComponent, HasElements],
  props: {
    schema: {
      type: Object,
      required: true
    }
  },
}