<script>
  import DatetimeElement from './../../../../components/elements/DatetimeElement'

  import DateElement from './DateElement'

  import Flatpickr from './../../../../components/wrappers/Flatpickr'

  export default {
    mixins: [DatetimeElement],
    components: {
      Flatpickr,
    },
    render: DateElement.render,
  }
</script>