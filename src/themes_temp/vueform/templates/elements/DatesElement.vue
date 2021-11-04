<script>
  import DatesElement from './../../../blank/templates/elements/DatesElement'

  export default {
    name: 'DatesElement',
    render: DatesElement.render,
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
  // Some styles are contained in Vueform.vue & DatepickerWrapper.vue
</style>