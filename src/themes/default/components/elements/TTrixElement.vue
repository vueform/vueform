<script>
  import TTrixElement from './../../../../components/elements/TTrixElement'

  import TrixElement from './TrixElement'

  import Trix from './../../../../components/wrappers/Trix'

  export default {
    mixins: [TTrixElement],
    components: {
      Trix,
    },
    render: TrixElement.render,
  }
</script>