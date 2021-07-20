<script>
  import FormStepsControl from './../../blank/components/FormStepsControl'

  export default {
    name: 'FormStepsControl',
    render: FormStepsControl.render,
    data() {
      return {
        defaultClasses: {
          button: 'form-btn',
          button_previous: 'form-btn-secondary',
          button_next: 'form-btn-primary',
          button_finish: 'form-btn-primary',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>