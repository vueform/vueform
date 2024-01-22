<script>
  import TTextareaElement from './../../../blank/templates/elements/TTextareaElement.vue'

  export default {
    name: 'TTextareaElement',
    render: TTextareaElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-text-type',
          inputContainer: 'vf-input-group vf-input-group-textarea',
          inputContainer_sm: 'vf-input-group-sm',
          inputContainer_md: '',
          inputContainer_lg: 'vf-input-group-lg',
          inputContainer_default: '',
          inputContainer_disabled: 'vf-input-group-disabled',
          inputContainer_focused: 'vf-input-group-focused',
          inputContainer_success: 'vf-input-group-success',
          inputContainer_danger: 'vf-input-group-danger',
          input: 'vf-field',
          input_sm: '',
          input_md: '',
          input_lg: '',
          input_enabled: '',
          input_disabled: '',
          input_focused: '',
          input_success: '',
          input_danger: '',
          $inputContainer: (classes, { isDisabled, Size, isSuccess, isDanger, focused }) => ([
            classes.inputContainer,
            classes[`inputContainer_${Size}`],
            isDisabled ? classes.inputContainer_disabled : null,
            !isDisabled && !isSuccess && !isDanger ? classes.inputContainer_default : null,
            !isDisabled && focused ? classes.inputContainer_focused : null,
            !isDisabled && isSuccess ? classes.inputContainer_success : null,
            !isDisabled && isDanger ? classes.inputContainer_danger : null,
          ]),
          $input: (classes, { isDisabled, Size, isSuccess, isDanger, focused }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : null,
            !isDisabled && !isSuccess && !isDanger && !focused  ? classes.input_enabled : null,
            !isDisabled && focused && !isSuccess && !isDanger ? classes.input_focused : null,
            !isDisabled && isDanger ? classes.input_danger : null,
            !isDisabled && isSuccess ? classes.input_success : null,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  /* Some styles are contained in Vueform.vue */
</style>