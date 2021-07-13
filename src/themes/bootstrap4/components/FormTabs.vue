<script>
  import FormTabs from './../../blank/components/FormTabs'

  export default {
    name: 'FormTabs',
    render: FormTabs.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-tabs nav nav-tabs',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .nav.form-tabs {
    margin-bottom: calc(#{$spacer} * 2);
  }
</style>