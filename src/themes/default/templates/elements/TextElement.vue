<script>
  import TextElement from './../../../blank/templates/elements/TextElement'

  export default {
    name: 'TextElement',
    render: TextElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          inputContainer: 'vf-input-group',
          input: 'vf-input',
          input_enabled: '',
          input_disabled: '',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue
</style>