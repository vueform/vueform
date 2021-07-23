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
    padding: var(--ms-option-py, calc(var(--form-input-py) + var(--form-border-width))) var(--ms-option-px, var(--form-input-px));
    color: var(--ms-empty-color, var(--form-gray-600));
    min-height: var(--form-input-min-height);
    align-items: center;
  }
</style>