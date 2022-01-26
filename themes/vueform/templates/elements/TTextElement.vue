<script>
  import TTextElement from './../../../blank/templates/elements/TTextElement.vue'

  export default {
    name: 'TTextElement',
    render: TTextElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: 'vf-input-group',
          input: 'vf-input',
          input_enabled: '',
          input_disabled: '',
          input_sm: 'vf-input-sm',
          input_md: '',
          input_lg: 'vf-input-lg',
          $input: (classes, { isDisabled, Size }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : classes.input_enabled
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue
</style>