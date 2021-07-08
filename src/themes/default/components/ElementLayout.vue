<script>
  import ElementLayout from './../../blank/components/ElementLayout'

  export default {
    name: 'ElementLayout',
    render: ElementLayout.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          container_error: 'has-error',
          outerWrapper: 'row',
          outerWrapper_single: 'form-group',
          outerWrapper_multiple: '',
          fieldWrapper: '',
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