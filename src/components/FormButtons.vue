<script>
  import Localized from './../mixins/Localized'

  export default {
    name: 'FormButtons',
    mixins: ['Localized'],
    inject: ['theme', 'layout'],
    props: {
      buttons: Array,
    },
  }
</script>