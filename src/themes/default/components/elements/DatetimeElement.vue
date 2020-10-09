<script>
  import DatetimeElement from './../../../../components/elements/DatetimeElement'

  import DateElement from './DateElement'

  export default {
    name: 'DatetimeElement',
    mixins: [DatetimeElement],
    render: DateElement.render,
  }
</script>