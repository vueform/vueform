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
          wrapper_left: 'vf-checkbox-wrapper-left',
          wrapper_right: 'vf-checkbox-wrapper-right',
          input: 'vf-checkbox',
          input_enabled: '',
          input_disabled: '',
          input_danger: 'vf-checkbox-danger',
          input_sm: 'vf-checkbox-sm',
          input_md: '',
          input_lg: 'vf-checkbox-lg',
          input_left: 'vf-checkbox-left',
          input_right: 'vf-checkbox-right',
          text: 'vf-checkbox-text',
          text_left: 'vf-checkbox-text-left',
          text_right: 'vf-checkbox-text-right',
          $wrapper: (classes, { Size, align }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            align === 'left' ? classes.wrapper_left : null,
            align === 'right' ? classes.wrapper_right : null,
          ]),
          $input: (classes, { isDisabled, Size, isDanger, align }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : classes.input_enabled,
            !isDisabled && isDanger ? classes.input_danger : null,
            align === 'left' ? classes.input_left : null,
            align === 'right' ? classes.input_right : null,
          ]),
          $text: (classes, { align }) => ([
            classes.text,
            align === 'left' ? classes.text_left : null,
            align === 'right' ? classes.text_right : null,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue
</style>