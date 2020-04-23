<script>
  import Localized from './../../../mixins/Localized'

  export default {
    inject: ['theme'],
    mixins: [Localized],
    props: {
      el$: null,
      item: null,
      value: null,
    },
}
</script>