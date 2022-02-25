<script>
  import TEditorElement from './../../../blank/templates/elements/TEditorElement.vue'

  export default {
    name: 'TEditorElement',
    render: TEditorElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-text-type',
          input: 'vf-editor',
          input_enabled: '',
          input_disabled: 'vf-editor-disabled',
          input_success: 'vf-editor-success',
          input_danger: 'vf-editor-danger',
          input_focused: 'vf-editor-focused',
          input_focused_success: 'vf-editor-focused-success',
          input_focused_danger: 'vf-editor-focused-danger',
          input_sm: 'vf-editor-sm',
          input_md: '',
          input_lg: 'vf-editor-lg',
          $input: (classes, { isDisabled, focused, Size, isSuccess, isDanger }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : null,
            !isDisabled && !isSuccess && !isDanger && !focused ? classes.input_enabled : null,
            !isDisabled && isDanger ? classes.input_danger : null,
            !isDisabled && isSuccess ? classes.input_success : null,
            focused && !isDanger && !isSuccess ? classes.input_focused : null,
            focused && isSuccess ? classes.input_focused_success : null,
            focused && isDanger ? classes.input_focused_danger : null,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in EditorElement.vue
</style>