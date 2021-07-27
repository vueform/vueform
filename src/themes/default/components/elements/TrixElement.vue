<script>
  import TrixElement from './../../../blank/components/elements/TrixElement'

  export default {
    name: 'TrixElement',
    render: TrixElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          input: 'vf-trix',
          input_enabled: '',
          input_disabled: 'is-disabled',
          input_focused: 'is-focused',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-trix {
    border: var(--vf-border-width) solid var(--vf-border-color);
    border-radius: var(--vf-border-radius);

    &.is-focused {
      border-color: var(--vf-primary);
      box-shadow: 0px 0px 0px var(--vf-ring-width) var(--vf-ring-color);
    }

    &.is-disabled {
      background: var(--vf-bg-disabled);
      color: var(--vf-color-disabled);
    }
  }
</style>