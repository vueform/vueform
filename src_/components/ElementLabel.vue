<script>
  import Localized from './../mixins/Localized'

  export default {
    mixins: [Localized],
    inject: ['theme', 'layout'],
    name: 'ElementLabel',
    props: {
    	name: [String, Number, Boolean],
    }
  }
</script>