<script>
  import CheckboxgroupSlotCheckbox from './../../../../blank/components/elements/slots/CheckboxgroupSlotCheckbox'

  export default {
    name: 'CheckboxgroupSlotCheckbox',
    render: CheckboxgroupSlotCheckbox.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-check',
          input: 'form-check-input',
          input_enabled: '',
          input_disabled: '',
          label: 'form-check-label',
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