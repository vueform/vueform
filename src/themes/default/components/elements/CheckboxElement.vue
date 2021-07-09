<script>
  import CheckboxElement from './../../../blank/components/elements/CheckboxElement'

  export default {
    name: 'CheckboxElement',
    render: CheckboxElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          wrapper: 'checkbox-wrapper',
          inputContainer: 'form-check',
          input: 'form-check-input',
          input_enabled: '',
          input_disabled: '',
          label: 'form-check-label',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .checkbox-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: $input-height;
  }

  .form-check .form-check-input {
    -webkit-appearance: none;
    transition: all .2s ease-in-out;
    cursor: pointer;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 1px solid $input-border-color;
    outline: none;
    border-radius: 4px;
    margin-top: 0.2rem;

    &:disabled {
      background: #e9ecef;
    }

    &:checked {
      box-shadow: inset 0 0 0 9px $primary;
      border: 0;

      &:after {
        content: " ";
        width: 10px;
        height: 10px;
        display: inline-block;
        background: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>');
        background-size: 10px 10px;
        background-position: 50%;
        background-repeat: no-repeat;
        position: absolute;
        top: 3px;
        left: 3px;
      }

      &:disabled {
        box-shadow: inset 0 0 0 9px #e9ecef;
        border: 1px solid $input-border-color;
      }
    }
  }

  .form-check-label {
    margin-left: 2px;
    cursor: pointer;
  }
</style>