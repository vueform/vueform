<script>
  import ElementError from './../../blank/components/ElementError'

  export default {
    name: 'ElementError',
    render: ElementError.render,
    data() {
      return {
        defaultClasses: {
          container: 'text-danger',
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