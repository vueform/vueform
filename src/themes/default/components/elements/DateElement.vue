<script>
  import DateElement from './../../../blank/components/elements/DateElement'

  export default {
    name: 'DateElement',
    render: DateElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          inputContainer: 'form-input-group',
          input: 'form-input',
          input_enabled: '',
          input_disabled: '',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Laraform.vue & FlatpickrWrapper.vue
</style>