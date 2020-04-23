<script>
  export default {
    name: 'BaseElement',
    props: {
      schema: {
        type: Object,
        required: true
      },
      name: {
        type: String,
        required: true
      },
    },
    computed: {
      label() {
        return this.schema.label
      }
    },
    methods: {
      remove() {
        this.$emit('remove', this.name)
      }
    }
  }
</script>