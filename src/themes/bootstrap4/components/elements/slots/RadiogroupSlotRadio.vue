<script>
  import RadiogroupSlotRadio from './../../../../blank/components/elements/slots/RadiogroupSlotRadio'

  export default {
    name: 'RadiogroupSlotRadio',
    render: RadiogroupSlotRadio.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-radio',
          input: 'form-radio-input',
          input_enabled: '',
          input_disabled: '',
          label: 'form-radio-label',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

</style>