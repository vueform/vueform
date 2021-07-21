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
  .multiselect-multiple-label {
    display: flex;
    align-items: center;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    background: transparent;
    line-height: var(--ms-line-height, inherit);
    padding-left: var(--ms-px, var(--form-input-px));
  }
</style>