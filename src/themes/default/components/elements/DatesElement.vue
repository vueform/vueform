<script>
  import DatesElement from './../../../blank/components/elements/DatesElement'

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
  // Some styles are contained in Laraform.vue & DatepickerWrapper.vue
</style>