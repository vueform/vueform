<script>
  import DatetimeElement from './../../../../components/elements/DatetimeElement'

  import DateElement from './DateElement'

  export default {
    name: 'DatetimeElement',
    mixins: [DatetimeElement],
    render: DateElement.render,
    data() {
      return _.merge(DateElement.data(), {
        defaultClasses: {
          container: 'lf-datetime',
        }
      })
    }
  }
</script>