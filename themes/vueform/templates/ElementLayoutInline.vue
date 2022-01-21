<script>
  import ElementLayoutInline from './../../blank/templates/ElementLayoutInline.vue'

  export default {
    name: 'ElementLayoutInline',
    render: ElementLayoutInline.render,
    data() {
      return {
        merge: true,
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
    display: flex;
  }
</style>