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
    padding: var(--form-select-option-py) var(--form-select-option-px);
    color: var(--form-select-empty-color);
    min-height: var(--form-input-min-height);
    align-items: center;
  }
</style>