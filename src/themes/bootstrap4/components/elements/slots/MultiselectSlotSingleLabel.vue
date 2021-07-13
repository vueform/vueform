<script>
  import MultiselectSlotSingleLabel from './../../../../blank/components/elements/slots/MultiselectSlotSingleLabel'

  export default {
    name: 'MultiselectSlotSingleLabel',
    render: MultiselectSlotSingleLabel.render,
    data() {
      return {
        defaultClasses: {
          container: 'multiselect-single-label',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .multiselect-single-label {
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    background: transparent;
    line-height: var(--ms-line-height, 1.375);
    padding-left: var(--ms-px, 0.875rem);
  }
</style>