<script>
  import TextareaElement from './TextareaElement'

  export default {
    name: 'TTextareaElement',
    render: TextareaElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          textarea: 'form-control',
        }
      }
    }
  }
</script>