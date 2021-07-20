<script>
  import TrixElement from './../../../blank/components/elements/TrixElement'

  export default {
    name: 'TrixElement',
    render: TrixElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          input: 'form-trix',
          input_enabled: '',
          input_disabled: 'is-disabled',
          input_focused: 'is-focused',
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-trix {
    border: var(--form-border-width) solid var(--form-border-color);
    border-radius: var(--form-border-radius);

    &.is-focused {
      border-color: var(--form-primary);
      box-shadow: 0px 0px 0px var(--form-ring-width) var(--form-ring-color);
    }

    &.is-disabled {
      background: var(--form-bg-disabled);
      color: var(--form-color-disabled);
    }
  }
</style>