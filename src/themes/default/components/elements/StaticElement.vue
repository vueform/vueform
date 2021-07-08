<script>
  import StaticElement from './../../../blank/components/elements/StaticElement'

  export default {
    name: 'StaticElement',
    render: StaticElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          content: '',
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