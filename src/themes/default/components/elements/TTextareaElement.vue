<script>
  import TTextareaElement from './../../../blank/components/elements/TTextareaElement'

  export default {
    name: 'TTextareaElement',
    render: TTextareaElement.render,
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