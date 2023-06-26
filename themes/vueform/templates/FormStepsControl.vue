<script>
  import FormStepsControl from './../../blank/templates/FormStepsControl.vue'

  export default {
    name: 'FormStepsControl',
    render: FormStepsControl.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          button: 'vf-btn',
          button_previous: '',
          button_previous_enabled: 'vf-btn-secondary',
          button_previous_disabled: 'vf-btn-secondary vf-btn-disabled',
          button_next: '',
          button_next_enabled: 'vf-btn-primary',
          button_next_disabled: 'vf-btn-primary vf-btn-disabled',
          button_next_loading: 'vf-btn-loading vf-btn-loading-primary',
          button_finish: '',
          button_finish_enabled: 'vf-btn-primary',
          button_finish_disabled: 'vf-btn-primary vf-btn-disabled',
          button_finish_loading: 'vf-btn-loading vf-btn-loading-primary',
          button_sm: 'vf-btn-sm',
          button_md: '',
          button_lg: 'vf-btn-lg',
          $button: (classes, { isDisabled, isLoading, type, Size }) => ([
            classes.button,
            classes[`button_${Size}`],
            classes[`button_${type}`],
            isDisabled ? classes[`button_${type}_disabled`] : classes[`button_${type}_enabled`],
            isLoading ? classes[`button_${type}_loading`] : null,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
</style>