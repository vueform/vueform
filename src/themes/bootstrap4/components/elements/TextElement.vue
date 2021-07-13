<script>
  import TextElement from './../../../blank/components/elements/TextElement'

  export default {
    name: 'TextElement',
    render: TextElement.render,
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

  /* Fix for border radius bug introduced by inserting and extra div between the prefix and .form control */
  
  .input-group > :not(.input-group-prepend) ~ .form-control:not(:first-child),
  .input-group:not(.has-validation) > :not(.input-group-prepend) ~ .form-control {
    border-top-left-radius: $border-radius;
    border-bottom-left-radius: $border-radius;
  }

  .input-group > .input-group-prepend ~ .form-control:not(:first-child),
  .input-group:not(.has-validation) > .input-group-prepend ~ .form-control {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
</style>