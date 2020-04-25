<script>
  export default {
    name: 'BaseElementLayout',
    inject: ['el$', 'theme'],
    provide() {
      return {
        el$: this.el$,
      }
    },
  }
</script>