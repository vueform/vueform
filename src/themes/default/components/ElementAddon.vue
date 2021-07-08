<script>
  import ElementAddon from './../../blank/components/ElementAddon'

  export default {
    name: 'ElementAddon',
    render: ElementAddon.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          container_before: 'input-group-prepend',
          container_after: 'input-group-append',
          wrapper: 'input-group-text',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .input-group-append {
    order: 2;
  }
</style>