<script>
  import TrixElement from './TrixElement'

  export default {
    name: 'TTrixElement',
    render: TrixElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          input: '',
          input_enabled: '',
          input_disabled: '',
          input_focused: '',
        }
      }
    }
  }
</script>