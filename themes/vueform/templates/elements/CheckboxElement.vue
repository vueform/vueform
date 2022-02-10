<script>
  import CheckboxElement from './../../../blank/templates/elements/CheckboxElement.vue'

  export default {
    name: 'CheckboxElement',
    render: CheckboxElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-checkbox-wrapper',
          wrapper_sm: 'vf-checkbox-wrapper-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-checkbox-wrapper-lg',
          input: 'vf-checkbox',
          input_enabled: '',
          input_disabled: '',
          input_danger: 'vf-checkbox-danger',
          input_sm: 'vf-checkbox-sm',
          input_md: '',
          input_lg: 'vf-checkbox-lg',
          text: 'vf-checkbox-text',
          $wrapper: (classes, { Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`]
          ]),
          $input: (classes, { isDisabled, Size, isDanger }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : classes.input_enabled,
            !isDisabled && isDanger ? classes.input_danger : null,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue
</style>