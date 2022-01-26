<script>
  import EditorElement from './../../../blank/templates/elements/EditorElement.vue'

  export default {
    name: 'EditorElement',
    render: EditorElement.render,
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
  .vf-editor {
    border: var(--vf-border-width) solid var(--vf-border-color);
    border-radius: var(--vf-border-radius);

    &.vf-editor-focused {
      border-color: var(--vf-primary);
      box-shadow: 0px 0px 0px var(--vf-ring-width) var(--vf-ring-color);
    }

    &.vf-editor-disabled {
      background: var(--vf-bg-disabled);
      color: var(--vf-color-disabled);
    }
  }
</style>