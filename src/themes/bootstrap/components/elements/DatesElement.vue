<script>
  import DateElement from './DateElement'

  export default {
    name: 'DatesElement',
    render: DateElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          inputContainer: 'input-group',
          input: 'form-control',
          inputEnabled: '',
          inputDisabled: '',
        }
      }
    }
  }
</script>