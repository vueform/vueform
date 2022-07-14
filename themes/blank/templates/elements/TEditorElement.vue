<script>
import EditorElement from './EditorElement.vue'

  export default {
    name: 'TEditorElement',
    render: EditorElement.render,
    staticRenderFns: EditorElement.staticRenderFns,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          input: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>