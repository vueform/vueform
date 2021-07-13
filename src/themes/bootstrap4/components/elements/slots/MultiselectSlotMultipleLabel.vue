<script>
  import MultiselectSlotMultipleLabel from './../../../../blank/components/elements/slots/MultiselectSlotMultipleLabel'

  export default {
    name: 'MultiselectSlotMultipleLabel',
    render: MultiselectSlotMultipleLabel.render,
    data() {
      return {
        defaultClasses: {
          container: 'multiselect-multiple-label',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';
  
  .multiselect-multiple-label {
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