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
          input_enabled: '',
          input_disabled: '',
        }
      }
    },
  }
</script>