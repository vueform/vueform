<script>
  import FileElement from './../../../blank/components/elements/FileElement'

  export default {
    name: 'FileElement',
    render: FileElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          container_removing: 'is-removing',
          button: 'btn btn-light',
          button_enabled: '',
          button_disabled: '',
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