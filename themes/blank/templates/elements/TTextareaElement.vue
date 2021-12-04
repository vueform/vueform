<script>
import TextareaElement from './TextareaElement.vue'

  export default {
    name: 'TTextareaElement',
    render: TextareaElement.render,
    staticRenderFns: TextareaElement.staticRenderFns,
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