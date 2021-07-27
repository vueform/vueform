<script>
  import ElementLabel from './../../blank/components/ElementLabel'

  export default {
    name: 'ElementLabel',
    render: ElementLabel.render,
    data() {
      return {
        defaultClasses: {
          container: 'vf-label',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-label {
    padding-top: calc(var(--vf-input-py) + var(--vf-border-width));
    padding-bottom: calc(var(--vf-input-py) + var(--vf-border-width));
    margin-bottom: 0;
  }
</style>