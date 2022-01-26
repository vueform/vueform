<script>
import DateElement from './DateElement.vue'

  export default {
    name: 'DatesElement',
    render: DateElement.render,
    staticRenderFns: DateElement.staticRenderFns,
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
    }
  }
</script>

<style lang="scss">
</style>