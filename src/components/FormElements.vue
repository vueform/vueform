<script>
  import ManagesElements from './../mixins/ManagesElements'
  import ref from './../directives/ref'

  export default {
    name: 'FormElements',
    directives: {
      ref,
    },
    mixins: [ManagesElements],
    inject: ['form$', 'theme'],
    props: {
      schema: {
        type: Object,
        required: true
      }
    },
    methods: {
      component(type) {
        return this.theme.elements[`${_.upperFirst(type)}Element`]
      }
    }
  }
</script>