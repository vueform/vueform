<script>
  import FormElements from './../../blank/components/FormElements'

  export default {
    name: 'FormElements',
    render: FormElements.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-row',
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