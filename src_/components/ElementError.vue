<script>
  import Localized from './../mixins/Localized'

  export default {
    mixins: [Localized],
    inject: ['theme', 'layout'],
    name: 'ElementError',
    props: {
      error: String,
    },
  }
</script>