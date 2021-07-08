<script>
  import FormTab from './../../blank/components/FormTab'

  export default {
    name: 'FormTab',
    render: FormTab.render,
    data() {
      return {
        defaultClasses: {
          container: 'nav-item',
          wrapper: 'nav-link',
          wrapper_active: 'active',
          wrapper_inactive: '',
          wrapper_valid: '',
          wrapper_invalid: 'has-error',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .nav-tabs {
    .nav-link {
      &.has-error, &.active.has-error {
        color: $danger;
      }
    }
  }
</style>