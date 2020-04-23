<script>
  import Localized from './../mixins/Localized'

  export default {
    mixins: [Localized],
    name: 'InputAddon',
    inject: ['theme', 'layout'],
    props: {
      type: String,
      addon: String,
    },
  }
</script>