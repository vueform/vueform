<script>
  import TextareaElement from './../../../blank/components/elements/TextareaElement'

  export default {
    name: 'TextareaElement',
    render: TextareaElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          inputContainer: 'input-group',
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