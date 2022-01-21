<script>
import TextElement from './TextElement.vue'

  export default {
    name: 'TTextElement',
    render: TextElement.render,
    staticRenderFns: TextElement.staticRenderFns,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: '',
          input_enabled: '',
          input_disabled: '',
        }
      }
    },
  }
</script>

<style lang="scss">
</style>