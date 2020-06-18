import BaseComponent from './../mixins/BaseComponent'
import HasElements from './../mixins/HasElements'
import _ from 'lodash'

export default {
  name: 'FormElements',
  mixins: [BaseComponent, HasElements],
  inject: ['form$'],
  props: {
    schema: {
      type: Object,
      required: true
    },
  },
}