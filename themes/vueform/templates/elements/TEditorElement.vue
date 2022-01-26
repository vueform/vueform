<script>
  import TEditorElement from './../../../blank/templates/elements/TEditorElement.vue'

  export default {
    name: 'TEditorElement',
    render: TEditorElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          input: 'vf-editor',
          input_enabled: '',
          input_disabled: 'vf-editor-disabled',
          input_focused: 'vf-editor-focused',
          input_sm: 'vf-editor-sm',
          input_md: '',
          input_lg: 'vf-editor-lg',
          $input: (classes, { isDisabled, focused, Size }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : classes.input_enabled,
            focused ? classes.input_focused : null,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in EditorElement.vue
</style>