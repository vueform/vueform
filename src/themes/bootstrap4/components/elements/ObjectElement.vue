<script>
  import ObjectElement from './../../../blank/components/elements/ObjectElement'

  export default {
    name: 'ObjectElement',
    render: ObjectElement.render,
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