<script>
  import MultiselectSlotNoResults from './../../../../blank/components/elements/slots/MultiselectSlotNoResults'

  export default {
    name: 'MultiselectSlotNoResults',
    render: MultiselectSlotNoResults.render,
    data() {
      return {
        defaultClasses: {
          container: 'multiselect-no-results',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .multiselect-no-results {
    display: flex;
    padding: $input-padding-y $input-padding-x;
    color: $text-muted;
    min-height: $input-height;
    align-items: center;
  }
</style>