<script>
  import TrixWrapper from './../../../blank/components/wrappers/TrixWrapper'
  import Trix from 'trix'

  export default {
    name: 'TrixWrapper',
    render: TrixWrapper.render,
    data() {
      return {
        defaultClasses: {
          container: '',
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