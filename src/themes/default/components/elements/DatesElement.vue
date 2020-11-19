<script>
  import DatesElement from './../../../../components/elements/DatesElement'

  import DateElement from './DateElement'

  export default {
    name: 'DatesElement',
    mixins: [DatesElement],
    render: DateElement.render,
    data() {
      return {
        defaultClasses: {
          container: 'lf-dates',
          input: 'form-control',
        }
      }
    }
  }
</script>