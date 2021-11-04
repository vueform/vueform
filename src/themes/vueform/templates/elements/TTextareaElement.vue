<script>
  import TTextareaElement from './../../../blank/templates/elements/TTextareaElement'

  export default {
    name: 'TTextareaElement',
    render: TTextareaElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          inputContainer: 'vf-input-group',
          input: 'vf-input',
          input_enabled: '',
          input_disabled: '',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue
</style>