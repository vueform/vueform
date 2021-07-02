<script>
  import TextareaElement from './TextareaElement'

  export default {
    name: 'TTextareaElement',
    render: TextareaElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: '',
          inputEnabled: '',
          inputDisabled: '',
        }
      }
    }
  }
</script>