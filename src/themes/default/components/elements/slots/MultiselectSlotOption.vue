<script>
  import MultiselectSlotOption from './../../../../blank/components/elements/slots/MultiselectSlotOption'

  export default {
    name: 'MultiselectSlotOption',
    render: MultiselectSlotOption.render,
    data() {
      return {
        defaultClasses: {
          container: '',
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