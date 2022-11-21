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
        }
      }
    },
  }
</script>

<style lang="scss">
</style>