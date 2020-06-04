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
  computed: {
    elements() {
      var blocks

      if (!_.isEmpty(this.form$.wizard$)) {
        blocks = this.form$.wizard$.steps$
      }

      if (!_.isEmpty(this.form$.tabs$)) {
        blocks = this.form$.tabs$.tabs$
      }

      if (blocks) {
        var schema = {}

        _.each(blocks, (block) => {
          var elements = block.step !== undefined
            ? block.step.elements
            : block.tab.elements

          _.each(elements, (element) => {
            schema[element] = this.schema[element]
          })
        })

        return schema
      }

      return this.schema
    },
  }
}