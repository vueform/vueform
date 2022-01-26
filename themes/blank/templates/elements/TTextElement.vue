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
          input_sm: '',
          input_md: '',
          input_lg: '',
          $input: (classes, { isDisabled, Size }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : classes.input_enabled
          ]),
        }
      }
    },
  }
</script>

<style lang="scss">
</style>