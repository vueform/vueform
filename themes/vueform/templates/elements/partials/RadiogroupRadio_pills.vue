<script>
  import RadiogroupRadio from './../../../../blank/templates/elements/partials/RadiogroupRadio.vue'

  export default {
    name: 'RadiogroupRadio_pills',
    render: RadiogroupRadio.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-radio-wrapper',
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
          input: 'vf-radio',
          text: 'vf-radio-text',
          $wrapper: (classes, { index, items, el$, value, isDisabled, Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            index < Object.keys(items).length - 1 ? classes.wrapper_not_last : null,
            index === 0 ? classes.wrapper_first : null,
            index === Object.keys(items).length - 1 ? classes.wrapper_last : null,
            el$.value == value ? classes.wrapper_selected : classes.wrapper_unselected,
            isDisabled ? classes.wrapper_disabled : null,
          ])
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue & RadiogroupElement.vue
</style>