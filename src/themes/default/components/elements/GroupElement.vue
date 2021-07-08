<script>
  import GroupElement from './../../../blank/components/elements/GroupElement'

  export default {
    name: 'GroupElement',
    render: GroupElement.render,
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