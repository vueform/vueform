<script>
  import TrixElement from './TrixElement'

  export default {
    name: 'TTrixElement',
    render: TrixElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          trix: '',
          disabled: 'is-disabled',
        }
      }
    }
  }
</script>