<script>
  import EditorElement from './../../../blank/templates/elements/EditorElement.vue'

  export default {
    name: 'EditorElement',
    render: EditorElement.render,
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
          input_sm: 'vf-editor-sm',
          input_md: '',
          input_lg: 'vf-editor-lg',
          $input: (classes, { isDisabled, focused, Size, isSuccess, isDanger }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : null,
            !isDisabled && !isSuccess && !isDanger ? classes.input_default : null,
            !isDisabled && focused ? classes.input_focused : null,
            !isDisabled && isSuccess ? classes.input_success : null,
            !isDisabled && isDanger ? classes.input_danger : null,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-editor {
    outline: 0px solid var(--vf-ring-color);
    outline-offset: 0;
    border-style: solid;
    transition: box-shadow .2s ease-in-out,
                color .2s ease-in-out,
                background-color .2s ease-in-out,
                border-color .2s ease-in-out;

    font-size: var(--vf-font-size);
    line-height: var(--vf-line-height);
    letter-spacing: var(--vf-letter-spacing);

    background-color: var(--vf-bg-input);
    color: var(--vf-color-input);
    border-color: var(--vf-border-color-input);
    box-shadow: var(--vf-shadow-input);

    border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
    border-radius: var(--vf-radius-input);

    &.vf-editor-disabled {
      background-color: var(--vf-bg-disabled);
      color: var(--vf-color-disabled);
    }

    &.vf-editor-success {
      background-color: var(--vf-bg-input-success);
      color: var(--vf-color-input-success);
      border-color: var(--vf-border-color-input-success);
    }

    &.vf-editor-danger {
      background-color: var(--vf-bg-input-danger);
      color: var(--vf-color-input-danger);
      border-color: var(--vf-border-color-input-danger);
    }

    &:hover:not(.vf-editor-disabled) {
      box-shadow: var(--vf-shadow-input-hover);
    }

    &:hover:not(.vf-editor-disabled):not(.vf-editor-success):not(.vf-editor-danger) {
      background-color: var(--vf-bg-input-hover);
      color: var(--vf-color-input-hover);
      border-color: var(--vf-border-color-input-hover);
    }

    &.vf-editor-focused {
      box-shadow: var(--vf-shadow-input-focus);
      outline: var(--vf-ring-width) solid var(--vf-ring-color);
      border-color: var(--vf-border-color-input-focus);
    }

    &.vf-editor-focused:not(.vf-editor-success):not(.vf-editor-danger),
    &.vf-editor-focused:not(.vf-editor-disabled):not(.vf-editor-success):not(.vf-editor-danger) {
      background-color: var(--vf-bg-input-focus);
      color: var(--vf-color-input-focus);
    }
  }
</style>