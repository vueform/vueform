<script>
  import FormStepsControls from './../../blank/components/FormStepsControls'

  export default {
    name: 'FormStepsControls',
    render: FormStepsControls.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-steps-controls',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .form-steps-controls {
    display: flex;
    justify-content: space-between;
    margin-top: $spacer;
  }
</style>