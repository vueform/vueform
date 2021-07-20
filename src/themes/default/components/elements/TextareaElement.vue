<script>
  import TextareaElement from './../../../blank/components/elements/TextareaElement'

  export default {
    name: 'TextareaElement',
    render: TextareaElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          inputContainer: 'form-input-group',
          input: 'form-input',
          input_enabled: '',
          input_disabled: '',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Laraform.vue
</style>