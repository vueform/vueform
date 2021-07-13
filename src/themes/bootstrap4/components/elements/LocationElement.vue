<script>
  import LocationElement from './../../../blank/components/elements/LocationElement'

  export default {
    name: 'LocationElement',
    render: LocationElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          input: 'form-control',
          input_enabled: '',
          input_disabled: '',
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