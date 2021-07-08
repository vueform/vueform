<script>
  import AddressElement from './../../../blank/components/elements/AddressElement'

  export default {
    name: 'AddressElement',
    render: AddressElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          childrenContainer: 'form-row',
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