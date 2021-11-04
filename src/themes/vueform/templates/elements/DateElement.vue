<script>
  import DateElement from './../../../blank/templates/elements/DateElement.vue'

  export default {
    name: 'DateElement',
    render: DateElement.render,
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