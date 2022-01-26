<script>
  import CheckboxgroupCheckbox_blocks from './../../../../blank/templates/elements/partials/CheckboxgroupCheckbox_blocks.vue'

  export default {
    name: 'CheckboxgroupCheckbox_blocks',
    render: CheckboxgroupCheckbox_blocks.render,
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
          input_enabled: '',
          input_disabled: '',
          input_sm: '',
          input_md: '',
          input_lg: '',
          text_wrapper: '',
          text: 'vf-checkbox-text',
          description: '',
          description_sm: '',
          description_md: '',
          description_lg: '',
          $wrapper: (classes, { index, items, el$, value, isDisabled, Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            index < Object.keys(items).length - 1 ? classes.wrapper_not_last : null,
            index === 0 ? classes.wrapper_first : null,
            index === Object.keys(items).length - 1 ? classes.wrapper_last : null,
            el$.value.indexOf(value) !== -1 ? classes.wrapper_selected : classes.wrapper_unselected,
            isDisabled ? classes.wrapper_disabled : null,
          ]),
          $input: (classes, { isDisabled, Size }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : classes.input_enabled
          ]),
          $description: (classes, { Size }) => ([
            classes.description,
            classes[`description_${Size}`],
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue & CheckboxgroupElement.vue
</style>