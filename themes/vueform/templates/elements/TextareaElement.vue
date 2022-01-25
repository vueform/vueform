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
          input: 'vf-input',
          input_enabled: '',
          input_disabled: '',
          input_sm: '',
          input_md: '',
          input_lg: '',
          $input: (classes, { isDisabled, Size }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : classes.input_enabled
          ]),
        }
      }
    },
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue
</style>