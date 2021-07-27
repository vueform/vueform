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
          inputContainer: 'vf-checkbox-container',
          input: 'vf-checkbox',
          input_enabled: '',
          input_disabled: '',
          label: 'vf-checkbox-label',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Laraform.vue
</style>