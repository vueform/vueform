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
    padding: var(--form-select-option-py) var(--form-select-option-px);
    color: var(--form-select-empty-color);
    min-height: var(--form-input-min-height);
    align-items: center;
  }
</style>