<script>
  import TimeElement from './../../../../components/elements/TimeElement'

  import DateElement from './DateElement'

  export default {
    name: 'TimeElement',
    mixins: [TimeElement],
    render: DateElement.render,
  }
</script>