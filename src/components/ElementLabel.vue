<script>
  import htmlIf from './../directives/html-if'

  export default {
    name: 'ElementLabel',
    directives: {
      htmlIf,
    },
    inject: ['el$'],
    computed: {
      name() {
        return this.el$.name
      },
      label() {
        if (this.isComponent) {
          return this.el$.schema.label
        }

        return this.el$.schema.label

        // return this.isFunction ? this.el$.schema.label(this.el$) : this.el$.schema.label
      },
      isFunction() {
        return typeof this.el$.schema.label === 'function'
      },
      isComponent() {
        return typeof this.el$.schema.label === 'object'
      },
    }
  }
</script>