<script>
  import DateElement from './DateElement'

  export default {
    name: 'DatesElement',
    render: DateElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          input: 'form-control',
        }
      }
    }
  }
</script>