<script>
  import RadiogroupRadio from './../../../../blank/templates/elements/partials/RadiogroupRadio.vue'

  export default {
    name: 'RadiogroupRadio',
    render: RadiogroupRadio.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-radio-container',
          input: 'vf-radio',
          input_enabled: '',
          input_disabled: '',
          input_sm: 'vf-radio-sm',
          input_md: '',
          input_lg: 'vf-radio-lg',
          text: 'vf-radio-text',
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
  /* Some styles are contained in Vueform.vue & RadiogroupElement.vue */
</style>