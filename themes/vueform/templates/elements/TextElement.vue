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
          $input: (classes, { isDisabled }) => ([
            classes.input,
            isDisabled ? classes.input_disabled : classes.input_enables,
          ])
        }
      }
    },
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue
</style>