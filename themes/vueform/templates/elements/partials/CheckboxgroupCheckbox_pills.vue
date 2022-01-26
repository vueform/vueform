<script>
  import CheckboxgroupCheckbox_pills from './../../../../blank/templates/elements/partials/CheckboxgroupCheckbox_pills.vue'

  export default {
    name: 'CheckboxgroupCheckbox_pills',
    render: CheckboxgroupCheckbox_pills.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-checkbox-container',
          wrapper: '',
          wrapper_not_last: '',
          wrapper_first: '',
          wrapper_last: '',
          wrapper_selected: '',
          wrapper_unselected: '',
          wrapper_disabled: '',
          wrapper_sm: '',
          wrapper_md: '',
          wrapper_lg: '',
          input: 'vf-checkbox',
          text: 'vf-checkbox-text',
          $wrapper: (classes, { index, items, el$, value, isDisabled, Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            index < Object.keys(items).length - 1 ? classes.wrapper_not_last : null,
            index === 0 ? classes.wrapper_first : null,
            index === Object.keys(items).length - 1 ? classes.wrapper_last : null,
            el$.value.indexOf(value) !== -1 ? classes.wrapper_selected : classes.wrapper_unselected,
            isDisabled ? classes.wrapper_disabled : null,
          ])
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue & CheckboxgroupElement.vue
</style>