<script>
  import FormStepsControl from './../../blank/components/FormStepsControl'

  export default {
    name: 'FormStepsControl',
    render: FormStepsControl.render,
    data() {
      return {
        defaultClasses: {
          button: 'vf-btn',
          button_previous_enabled: 'vf-btn-secondary',
          button_previous_disabled: 'vf-btn-secondary is-disabled',
          button_next_enabled: 'vf-btn-primary',
          button_next_disabled: 'vf-btn-primary is-disabled',
          button_next_loading: 'is-loading',
          button_finish_enabled: 'vf-btn-primary',
          button_finish_disabled: 'vf-btn-primary is-disabled',
          button_finish_loading: 'is-loading',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>