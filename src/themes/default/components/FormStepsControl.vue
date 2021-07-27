<script>
  import FormStepsControl from './../../blank/components/FormStepsControl'

  export default {
    name: 'FormStepsControl',
    render: FormStepsControl.render,
    data() {
      return {
        defaultClasses: {
          button: 'vf-btn',
          button_previous: 'vf-btn-secondary',
          button_next: 'vf-btn-primary',
          button_finish: 'vf-btn-primary',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>