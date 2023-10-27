<script>
  import RadioElement from './../../../blank/templates/elements/RadioElement.vue'

  export default {
    name: 'RadioElement',
    render: RadioElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-radio-wrapper',
          wrapper_sm: 'vf-radio-wrapper-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-radio-wrapper-lg',
          wrapper_left: 'vf-radio-wrapper-left',
          wrapper_right: 'vf-radio-wrapper-right',
          input: 'vf-radio',
          input_enabled: '',
          input_disabled: '',
          input_danger: 'vf-radio-danger',
          input_sm: 'vf-radio-sm',
          input_md: '',
          input_lg: 'vf-radio-lg',
          input_left: 'vf-radio-left',
          input_right: 'vf-radio-right',
          text: 'vf-radio-text',
          text_left: 'vf-radio-text-left',
          text_right: 'vf-radio-text-right',
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