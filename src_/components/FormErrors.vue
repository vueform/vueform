<script>
  import Localized from './../mixins/Localized'

  export default {
    mixins: [Localized],
    inject: ['theme', 'layout'],
    name: 'FormErrors',
    props: {
    	errors: Array,
    },
  }
</script>