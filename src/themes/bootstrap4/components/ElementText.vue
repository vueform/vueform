<script>
  import ElementText from './../../blank/components/ElementText'

  export default {
    name: 'ElementText',
    render: ElementText.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          container_before: '',
          container_between: '',
          container_after: '',
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