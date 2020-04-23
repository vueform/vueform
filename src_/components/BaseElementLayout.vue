<script>
  import Localized from './../mixins/Localized'

  export default {
    mixins: [Localized],
    inject: ['theme', 'layout'],
    name: 'BaseElementLayout',
    props: {
      el$: Object
    },
  }
</script>