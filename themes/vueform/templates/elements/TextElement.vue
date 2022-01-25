<script>
  import TextElement from './../../../blank/templates/elements/TextElement.vue'

  export default {
    name: 'TextElement',
    render: TextElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: 'vf-input-group',
          input: 'vf-input',
          input_enabled: 'vf-input-enabled',
          input_disabled: 'vf-input-disabled',
          input_sm: '',
          input_md: '',
          input_lg: '',
          $input: (classes, { isDisabled, Size }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : classes.input_enabled
          ]),
        }
      }
    },
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue
</style>