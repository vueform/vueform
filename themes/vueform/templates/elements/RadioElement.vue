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
          input: 'vf-radio',
          input_enabled: '',
          input_disabled: '',
          input_sm: 'vf-radio-sm',
          input_md: '',
          input_lg: 'vf-radio-lg',
          text: 'vf-radio-text',
          $wrapper: (classes, { Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`]
          ]),
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
  // Some styles are contained in Vueform.vue
</style>