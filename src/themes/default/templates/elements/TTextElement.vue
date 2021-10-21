<script>
  import TTextElement from './../../../blank/templates/elements/TTextElement'

  export default {
    name: 'TTextElement',
    render: TTextElement.render,
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
  // Some styles are contained in Laraform.vue
</style>