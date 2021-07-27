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
  .multiselect-no-results {
    display: flex;
    padding: var(--vf-select-option-py) var(--vf-select-option-px);
    color: var(--vf-select-empty-color);
    min-height: var(--vf-input-min-height);
    align-items: center;
  }
</style>