<script>
  import RadioElement from './../../../blank/components/elements/RadioElement'

  export default {
    name: 'RadioElement',
    render: RadioElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          wrapper: '',
          inputContainer: 'form-radio-container',
          input: 'form-radio',
          input_enabled: '',
          input_disabled: '',
          label: 'form-radio-label',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Laraform.vue
</style>