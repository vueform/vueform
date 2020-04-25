<script>
  import HasElements from './../mixins/HasElements'
  import ManagesElements from './../mixins/ManagesElements'
  import ref from './../directives/ref'

  export default {
    name: 'FormElements',
    directives: {
      ref,
    },
    mixins: [ManagesElements, HasElements],
    inject: ['form$', 'theme'],
    props: {
      schema: {
        type: Object,
        required: true
      }
    },
    computed: {
      elements_() {
        return _.map(_.keys(_.keyBy(this.schema, 'type')), (item) => {
          return item.replace('-', '')
        })
      },
      components_() {
        let components = []

        _.each(this.schema, (element) => {
          if (element.component && typeof element.component == 'string') {
            components.push(element.component)
          }
        })

        return components
      }
    },
    methods: {
      component(type) {
        return this.theme.elements[`${_.upperFirst(type)}Element`]
      }
    }
  }
</script>