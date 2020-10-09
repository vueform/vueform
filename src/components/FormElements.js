import _ from 'lodash'
import BaseComponent from './../mixins/BaseComponent'
import HasElements from './../mixins/HasElements'
import { reactive, ref } from 'composition-api'

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
  init(props, context) {
    const elements$ = ref([])
    const defaultClasses = context.defaultClasses

    return {
      elements$,
      defaultClasses,
    }
  }
}