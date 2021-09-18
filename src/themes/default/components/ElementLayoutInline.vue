<script>
  import ElementLayoutInline from './../../blank/components/ElementLayoutInline'

  export default {
    name: 'ElementLayoutInline',
    render: ElementLayoutInline.render,
    data() {
      return {
        defaultClasses: {
          container: 'vf-inline-layout',
          container_error: 'has-error',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-inline-layout {
    display: inline-flex;
  }
</style>