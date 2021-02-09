<script>
  import FormButton from './FormButton'

  export default {
    name: 'FormButtonSubmit',
    render: FormButton.render,
    data() {
      return {
        defaultClasses: {
          button: 'btn',
          loading: 'btn-loading',
          disabled: 'btn-disabled',
          left: 'align-left',
          center: 'align-center',
          right: 'align-right',
        }
      }
    }
  }
</script>