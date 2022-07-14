<script>
import TextareaElement from './TextareaElement.vue'

  export default {
    name: 'TTextareaElement',
    render: TextareaElement.render,
    staticRenderFns: TextareaElement.staticRenderFns,
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