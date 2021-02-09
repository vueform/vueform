<script>
  import DateElement from './DateElement'

  export default {
    name: 'DatetimeElement',
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