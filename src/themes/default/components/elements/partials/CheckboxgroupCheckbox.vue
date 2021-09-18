<script>
  import CheckboxgroupCheckbox from './../../../../blank/components/elements/partials/CheckboxgroupCheckbox'

  export default {
    name: 'CheckboxgroupCheckbox',
    render: CheckboxgroupCheckbox.render,
    data() {
      return {
        defaultClasses: {
          container: 'vf-checkbox-container',
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