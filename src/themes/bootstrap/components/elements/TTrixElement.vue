<script>
  import TrixElement from './TrixElement'
  import Trix from './../wrappers/Trix'

  export default {
    name: 'TTrixElement',
    components: {
      Trix,
    },
    render: TrixElement.render,
    data() {
      return {
        defaultClasses: {
          container: 'lf-trix',
          trixDisabled: 'trix-disabled',
        }
      }
    }
  }
</script>