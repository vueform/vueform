<script>
  import MultiselectMultipleLabel from './../../../../blank/components/elements/partials/MultiselectMultipleLabel'

  export default {
    name: 'MultiselectMultipleLabel',
    render: MultiselectMultipleLabel.render,
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
    line-height: var(--vf-select-line-height);
    padding-left: var(--vf-select-px);
  }
</style>