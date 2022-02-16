<script>
import DateElement from './DateElement.vue'

  export default {
    name: 'DatesElement',
    render: DateElement.render,
    staticRenderFns: DateElement.staticRenderFns,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>