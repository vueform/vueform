<script>
  import RadioElement from './../../../blank/components/elements/RadioElement'

  export default {
    name: 'RadioElement',
    render: RadioElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          wrapper: 'radio-wrapper',
          inputContainer: 'form-radio',
          input: 'form-radio-input',
          input_enabled: '',
          input_disabled: '',
          label: 'form-radio-label',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .radio-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: $input-height;
  }

  .form-radio {
    position: relative;
    display: block;
    padding-left: $form-check-input-gutter;
  }

  .form-radio-input {
    position: absolute;
    margin-left: -$form-check-input-gutter;
    -webkit-appearance: none;
    transition: all .2s ease-in-out;
    cursor: pointer;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 1px solid $input-border-color;
    outline: none;
    border-radius: 50%;
    margin-top: 0.2rem;

    &[disabled] ~ .form-check-label,
    &:disabled ~ .form-check-label {
      color: $text-muted;
    }

    &:disabled {
      background: #e9ecef;
    }

    &:checked {
      box-shadow: inset 0 0 0 9px $primary;
      border: 0;

      &:after {
        content: " ";
        position: absolute;
        background: #fff;
        width: 6px;
        height: 6px;
        left: 5px;
        top: 5px;
        border-radius: 50%;
        opacity: 0;
        transition: all .2s ease-in-out .1s;
        transform: scale(.2);
        display: inline-block;
        opacity: 1;
        transform: scale(1);
      }

      &:disabled {
        box-shadow: inset 0 0 0 9px #e9ecef;
        border: 1px solid $input-border-color;
      }
    }

    &:disabled:checked:after {
      left: 4px;
      top: 4px; 
    }
  }

  .form-radio-label {
    margin-bottom: 0; // Override default `<label>` bottom margin
    margin-left: 2px;
    cursor: pointer;
  }
</style>