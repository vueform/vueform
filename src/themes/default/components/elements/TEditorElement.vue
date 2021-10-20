<script>
  import TEditorElement from './../../../blank/components/elements/TEditorElement'

  export default {
    name: 'TEditorElement',
    render: TEditorElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          input: 'vf-editor',
          input_enabled: '',
          input_disabled: 'is-disabled',
          input_focused: 'is-focused',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in EditorElement.vue
</style>