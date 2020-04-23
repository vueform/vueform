<script>
  import Localized from './../../../mixins/Localized'

  export default {
    mixins: [Localized],
    props: {
      el$: null,
      option: null,
      search: null,
      remove: null,
    },
}
</script>