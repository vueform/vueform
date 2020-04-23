<script>
  import Localized from './../mixins/Localized'
  import HasElements from './../mixins/HasElements'
  import ref from './../directives/ref'

  export default {
    mixins: [Localized, HasElements],
    directives: {
      ref,
    },
    inject: ['form$', 'theme', 'layout'],
    name: 'FormElements',
    props: {
    	schema: [Object],
    	wizard$: {
        type: [Object],
        required: false
      },
    	tabs$: {
        type: [Object],
        required: false
      },
    },
    computed: {
      elements() {
        var step

        if (!_.isEmpty(this.wizard$) && this.wizard$.current$.step !== undefined) {
          step = this.wizard$.current$.step
        }

        if (!_.isEmpty(this.tabs$) && this.tabs$.current$.tab !== undefined) {
          step = this.tabs$.current$.tab
        }

        if (step) {
          var schema = Object.assign({}, this.schema)
          var elementList = {}

          _.each(step.elements, (name) => {
            delete schema[name]

            elementList[name] = this.schema[name]
          })

          return Object.assign({}, schema, elementList)
        }

        return this.schema
      },
      elements_() {
        return _.map(_.keys(_.keyBy(this.schema, 'type')), (item) => {
          return item.replace('-', '')
        })
      },
      components_() {
        var components = []

        _.each(this.schema, (element) => {
          if (element.component && typeof element.component == 'string') {
            components.push(element.component)
          }
        })

        return components
      }
    },
  }
</script>