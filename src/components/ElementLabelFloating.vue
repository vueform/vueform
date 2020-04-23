<script>
  import Localized from './../mixins/Localized'

  export default {
    mixins: [Localized],
    inject: ['theme', 'layout'],
    name: 'ElementLabelFloating',
    props: {
      visible: {
        type: Boolean,
        default: false,
      }
    }
  }
</script>