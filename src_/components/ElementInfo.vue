<script>
  import Localized from './../mixins/Localized'

  export default {
    mixins: [Localized],
    inject: ['theme', 'layout'],
    name: 'ElementInfo',
    props: {
      el$: Object
    },
  }
</script>