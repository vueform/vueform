<script>
  import TimeElement from './../../../../components/elements/TimeElement'

  import DateElement from './DateElement'

  import Flatpickr from './../../../../components/wrappers/Flatpickr'

  export default {
    mixins: [TimeElement],
    components: {
      Flatpickr,
    },
    render: DateElement.render,
  }
</script>