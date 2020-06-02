import BaseComponent from './../mixins/BaseComponent'
import HasElements from './../mixins/HasElements'
import mref from './../directives/mref'
import _ from 'lodash'

export default {
  name: 'FormElements',
  directives: {
    mref,
  },
  mixins: [BaseComponent, HasElements],
  props: {
    schema: {
      type: Object,
      required: true
    }
  },
}