<script>
  import TextElement from './TextElement'

  export default {
    name: 'TTextElement',
    render: TextElement.render,
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
    },
  }
</script>