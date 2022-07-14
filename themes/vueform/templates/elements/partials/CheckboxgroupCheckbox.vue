<script>
  import CheckboxgroupCheckbox from './../../../../blank/templates/elements/partials/CheckboxgroupCheckbox.vue'

  export default {
    name: 'CheckboxgroupCheckbox',
    render: CheckboxgroupCheckbox.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-checkbox-container',
          input: 'vf-checkbox',
          input_enabled: '',
          input_disabled: '',
          input_sm: 'vf-checkbox-sm',
          input_md: '',
          input_lg: 'vf-checkbox-lg',
          text: 'vf-checkbox-text',
          $input: (classes, { isDisabled, Size }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : classes.input_enabled,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue & CheckboxgroupElement.vue
</style>