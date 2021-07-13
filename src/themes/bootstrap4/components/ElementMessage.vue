<script>
  import ElementMessage from './../../blank/components/ElementMessage'

  export default {
    name: 'ElementMessage',
    render: ElementMessage.render,
    data() {
      return {
        defaultClasses: {
          container: 'text-success',
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