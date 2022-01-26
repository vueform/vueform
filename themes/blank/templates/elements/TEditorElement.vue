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
          input_enabled: '',
          input_disabled: '',
          input_focused: '',
          input_sm: '',
          input_md: '',
          input_lg: '',
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
</style>