<script>
  import TTextareaElement from './../../../blank/components/elements/TTextareaElement'

  export default {
    name: 'TTextareaElement',
    render: TTextareaElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: 'form-control',
          input_enabled: '',
          input_disabled: '',
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