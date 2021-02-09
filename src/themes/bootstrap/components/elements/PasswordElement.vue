<script>
  import TextElement from './TextElement'

  export default {
    name: 'PasswordElement',
    render: TextElement.render,
    data() {
      return {
        defaultClasses: {
          container: 'lf-password',
          inputContainer: 'input-group',
          input: 'form-control',
        }
      }
    },
  }
</script>