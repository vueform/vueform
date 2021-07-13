<script>
  import ElementLabel from './../../blank/components/ElementLabel'

  export default {
    name: 'ElementLabel',
    render: ElementLabel.render,
    data() {
      return {
        defaultClasses: {
          container: 'col-form-label',
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