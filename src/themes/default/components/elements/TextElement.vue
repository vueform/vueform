<script>
  import TextElement from './../../../blank/components/elements/TextElement'

  export default {
    name: 'TextElement',
    render: TextElement.render,
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