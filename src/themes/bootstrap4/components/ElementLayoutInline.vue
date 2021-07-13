<script>
  import ElementLayoutInline from './../../blank/components/ElementLayoutInline'

  export default {
    name: 'ElementLayoutInline',
    render: ElementLayoutInline.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          container_error: 'has-error',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

</style>