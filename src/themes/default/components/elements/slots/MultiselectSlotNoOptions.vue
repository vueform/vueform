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
    padding: var(--ms-option-py, calc(var(--form-input-py) + var(--form-border-width))) var(--ms-option-px, var(--form-input-px));
    color: var(--ms-empty-color, var(--form-gray-600));
    min-height: var(--form-input-min-height);
    align-items: center;
  }
</style>