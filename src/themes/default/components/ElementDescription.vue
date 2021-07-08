<script>
  import ElementDescription from './../../blank/components/ElementDescription'

  export default {
    name: 'ElementDescription',
    render: ElementDescription.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-text text-muted',
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