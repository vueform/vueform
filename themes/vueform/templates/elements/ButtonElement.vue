<script>
  import ButtonElement from './../../../blank/templates/elements/ButtonElement.vue'

  export default {
    name: 'ButtonElement',
    render: ButtonElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-text-type',
          button: 'vf-btn',
          button_enabled: '',
          button_disabled: 'vf-btn-disabled',
          button_loading: 'vf-btn-loading',
          button_loading_primary: 'vf-btn-loading-primary',
          button_loading_secondary: 'vf-btn-loading-secondary',
          button_loading_danger: 'vf-btn-loading-danger',
          button_primary: 'vf-btn-primary',
          button_secondary: 'vf-btn-secondary',
          button_danger: 'vf-btn-danger',
          button_full: 'vf-btn-full',
          button_not_full: '',
          button_left: 'vf-btn-left',
          button_center: 'vf-btn-center',
          button_right: 'vf-btn-right',
          button_sm: 'vf-btn-sm',
          button_md: '',
          button_lg: 'vf-btn-lg',
          $button: (classes, { isDisabled, isLoading, buttonClass, Size, danger, secondary, full, align }) => ([
            classes.button,
            danger ? classes.button_danger : null,
            secondary ? classes.button_secondary : null,
            !danger && !secondary ? classes.button_primary : null,
            classes[`button_${Size}`],
            isDisabled ? classes.button_disabled : null,
            !isDisabled && !isLoading ? classes.button_enabled : null,
            isLoading ? classes.button_loading : null,
            isLoading && danger ? classes.button_loading_danger : null,
            isLoading && secondary ? classes.button_loading_secondary : null,
            isLoading && !secondary && !danger ? classes.button_loading_primary : null,
            full ? classes.button_full : classes.button_not_full,
            align === 'left' ? classes.button_left : null,
            align === 'center' ? classes.button_center : null,
            align === 'right' ? classes.button_right : null,
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