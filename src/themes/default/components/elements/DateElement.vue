<script>
  import DateElement from './../../../blank/components/elements/DateElement'

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
  // Some styles are contained in Laraform.vue & DatepickerWrapper.vue
</style>