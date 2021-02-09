<script>
  import DateElement from './DateElement'

  export default {
    name: 'TimeElement',
    render: DateElement.render,
    data() {
      return _.merge(DateElement.data(), {
        defaultClasses: {
          container: 'lf-time',
        }
      })
    }
  }
</script>