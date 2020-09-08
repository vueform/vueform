<script>
  import TimeElement from './../../../../components/elements/TimeElement'

  import DateElement from './DateElement'

  export default {
    mixins: [TimeElement],
    render: DateElement.render,
  }
</script>