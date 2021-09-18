<script>
  import MultiselectNoOptions from './../../../../blank/components/elements/partials/MultiselectNoOptions'

  export default {
    name: 'MultiselectNoOptions',
    render: MultiselectNoOptions.render,
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