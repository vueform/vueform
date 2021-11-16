<script>
  import DateElement from './DateElement'

  export default {
    name: 'DatesElement',
    render: DateElement.render,
    staticRenderFns: DateElement.staticRenderFns,
    data() {
      return {
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: '',
          input_enabled: '',
          input_disabled: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>