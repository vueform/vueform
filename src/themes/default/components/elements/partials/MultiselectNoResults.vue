<script>
  import MultiselectNoResults from './../../../../blank/components/elements/partials/MultiselectNoResults'

  export default {
    name: 'MultiselectNoResults',
    render: MultiselectNoResults.render,
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