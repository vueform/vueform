<script>
  import RadiogroupSlotRadio from './../../../../blank/components/elements/slots/RadiogroupSlotRadio'

  export default {
    name: 'RadiogroupSlotRadio',
    render: RadiogroupSlotRadio.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-radio-container',
          input: 'form-radio',
          input_enabled: '',
          input_disabled: '',
          label: 'form-radio-label',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Laraform.vue
</style>