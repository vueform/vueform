<script>
  import CheckboxgroupSlotCheckbox from './../../../../blank/components/elements/slots/CheckboxgroupSlotCheckbox'

  export default {
    name: 'CheckboxgroupSlotCheckbox',
    render: CheckboxgroupSlotCheckbox.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-checkbox-container',
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