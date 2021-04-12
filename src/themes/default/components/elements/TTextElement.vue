<script>
  import TextElement from './TextElement'

  export default {
    name: 'TTextElement',
    render: TextElement.render,
    data() {
      return {
        defaultClasses: {
          container: '', // added to layout
          inputContainer: 'input-group',
          input: 'form-control',
        }
      }
    },
  }
</script>