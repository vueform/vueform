<script>
  import MultiselectSingleLabel from './../../../../blank/components/elements/partials/MultiselectSingleLabel'

  export default {
    name: 'MultiselectSingleLabel',
    render: MultiselectSingleLabel.render,
    data() {
      return {
        defaultClasses: {
          container: 'multiselect-single-label',
        }
      }
    }
  }
</script>

<style lang="scss">
  .multiselect-single-label {
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