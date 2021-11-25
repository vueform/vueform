<script>
  import CheckboxgroupCheckbox from './../../../../blank/templates/elements/partials/CheckboxgroupCheckbox.vue'

  export default {
    name: 'CheckboxgroupCheckbox',
    render: CheckboxgroupCheckbox.render,
    data() {
      return {
        defaultClasses: {
          container: 'vf-checkbox-wrapper',
          input: 'vf-checkbox',
          input_enabled: '',
          input_disabled: '',
          text: 'vf-checkbox-text',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue & CheckboxgroupElement.vue
</style>