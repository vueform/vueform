<script>
  import ElementLabel from './../../blank/components/ElementLabel'

  export default {
    name: 'ElementLabel',
    render: ElementLabel.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-label',
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-label {
    padding: calc(var(--form-input-py) + var(--form-border-width)) var(--form-gutter);
    padding-left: 0;
  }
</style>