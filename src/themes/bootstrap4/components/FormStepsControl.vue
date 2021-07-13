<script>
  import FormStepsControl from './../../blank/components/FormStepsControl'

  export default {
    name: 'FormStepsControl',
    render: FormStepsControl.render,
    data() {
      return {
        defaultClasses: {
          button: 'btn',
          button_previous: 'btn-secondary',
          button_next: 'btn-primary',
          button_finish: 'btn-primary',
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