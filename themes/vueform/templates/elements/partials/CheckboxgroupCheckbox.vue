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
          input_danger: 'vf-checkbox-danger',
          input_sm: 'vf-checkbox-sm',
          input_md: '',
          input_lg: 'vf-checkbox-lg',
          text: 'vf-checkbox-text',
          $input: (classes, { isDisabled, Size, isDanger }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : classes.input_enabled,
            !isDisabled && isDanger ? classes.input_danger : null,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue & CheckboxgroupElement.vue
</style>