<script>
  import TrixElement from './../../../blank/components/elements/TrixElement'

  export default {
    name: 'TrixElement',
    render: TrixElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          input: 'trix',
          input_enabled: '',
          input_disabled: 'is-disabled',
          input_focused: 'is-focused',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .trix {
    border: 1px solid #ced4da;
    border-radius: 0.25rem;

    &.is-focused {
      border-color: #15C495;
      box-shadow: 0px 0px 0px var(--vf-ring-width, 2px) var(--vf-ring-color, #15C49540);
    }

    &.is-disabled {
      background: #e9ecef;
    }
  }
</style>