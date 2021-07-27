<script>
  import MultiselectSlotNoOptions from './../../../../blank/components/elements/slots/MultiselectSlotNoOptions'

  export default {
    name: 'MultiselectSlotNoOptions',
    render: MultiselectSlotNoOptions.render,
    data() {
      return {
        defaultClasses: {
          container: 'multiselect-no-options',
        }
      }
    }
  }
</script>

<style lang="scss">
  .multiselect-no-options {
    display: flex;
    padding: var(--vf-select-option-py) var(--vf-select-option-px);
    color: var(--vf-select-empty-color);
    min-height: var(--vf-input-min-height);
    align-items: center;
  }
</style>