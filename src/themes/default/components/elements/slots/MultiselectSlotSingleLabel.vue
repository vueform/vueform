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
  .multiselect-single-label {
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    background: transparent;
    line-height: var(--form-select-line-height);
    padding-left: var(--form-select-px);
  }
</style>