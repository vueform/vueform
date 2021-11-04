<script>
  import EditorElement from './EditorElement'

  export default {
    name: 'TEditorElement',
    render: EditorElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          input: '',
          input_enabled: '',
          input_disabled: '',
          input_focused: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>