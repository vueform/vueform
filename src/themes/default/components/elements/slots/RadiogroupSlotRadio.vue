<script>
  import RadiogroupSlotRadio from './../../../../blank/components/elements/slots/RadiogroupSlotRadio'

  export default {
    name: 'RadiogroupSlotRadio',
    render: RadiogroupSlotRadio.render,
    data() {
      return {
        defaultClasses: {
          container: 'vf-radio-container',
          input: 'vf-radio',
          input_enabled: '',
          input_disabled: '',
          label: 'vf-radio-label',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Laraform.vue
</style>