<script>
  import CheckboxElement from './../../../blank/components/elements/CheckboxElement'

  export default {
    name: 'CheckboxElement',
    render: CheckboxElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          wrapper: '',
          inputContainer: 'form-checkbox-container',
          input: 'form-checkbox',
          input_enabled: '',
          input_disabled: '',
          label: 'form-checkbox-label',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Laraform.vue
</style>