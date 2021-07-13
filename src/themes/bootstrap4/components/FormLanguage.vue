<script>
  import FormLanguage from './../../blank/components/FormLanguage'

  export default {
    name: 'FormLanguage',
    render: FormLanguage.render,
    data() {
      return {
        defaultClasses: {
          container: 'nav-item',
          wrapper: 'nav-link',
          wrapper_active: 'active',
          wrapper_inactive: '',
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