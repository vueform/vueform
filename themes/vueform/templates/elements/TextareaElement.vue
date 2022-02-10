<script>
  import TextareaElement from './../../../blank/templates/elements/TextareaElement.vue'

  export default {
    name: 'TextareaElement',
    render: TextareaElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: 'vf-input-group',
          inputContainer_sm: 'vf-input-group-sm',
          inputContainer_md: '',
          inputContainer_lg: 'vf-input-group-lg',
          input: 'vf-input vf-textarea',
          input_enabled: '',
          input_disabled: '',
          input_success: 'vf-input-success',
          input_danger: 'vf-input-danger',
          input_sm: 'vf-input-sm',
          input_md: '',
          input_lg: 'vf-input-lg',
          $inputContainer: (classes, { Size }) => ([
            classes.inputContainer,
            classes[`inputContainer_${Size}`],
          ]),
          $input: (classes, { isDisabled, Size, isSuccess, isDanger }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : null,
            !isDisabled && !isSuccess && !isDanger ? classes.input_enabled : null,
            !isDisabled && isDanger ? classes.input_danger : null,
            !isDisabled && isSuccess ? classes.input_success : null,
          ]),
        }
      }
    },
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue
</style>