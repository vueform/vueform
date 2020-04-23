<script>
  import Localized from './../../../mixins/Localized'

  export default {
    mixins: [Localized],
    props: {
      el$: null,
      search: null,
      values: null,
      remove: null,
    },
}
</script>