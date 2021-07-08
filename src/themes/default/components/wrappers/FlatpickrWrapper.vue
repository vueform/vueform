<script>
  import FlatpickrWrapper from './../../../blank/components/wrappers/FlatpickrWrapper'

  export default {
    name: 'FlatpickrWrapper',
    render: FlatpickrWrapper.render,
    data() {
      return {
        defaultClasses: {
          flatpickr: '',
          calendarContainer: 'flatpickr-calendar-container'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

</style>