<script>
  import ButtonElement from './../../../blank/templates/elements/ButtonElement.vue'

  export default {
    name: 'ButtonElement',
    render: ButtonElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          button: 'vf-btn',
          button_enabled: '',
          button_disabled: 'is-disabled',
          button_loading: 'is-loading',
          button_sm: '',
          button_md: '',
          button_lg: '',
          $button: (classes, { isDisabled, isLoading, buttonClass, Size }) => ([
            classes.button,
            classes[`button_${Size}`],
            isDisabled ? classes.input_disabled : null,
            !isDisabled && !isLoading ? classes.button_enabled : null,
            isLoading ? classes.button_loading : null,
            buttonClass,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue
</style>