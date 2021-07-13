<script>
  import FormMessages from './../../blank/components/FormMessages'

  export default {
    name: 'FormMessages',
    render: FormMessages.render,
    data() {
      return {
        defaultClasses: {
          container: 'alert alert-success',
          message: '',
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