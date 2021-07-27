<script>
  import ElementAddon from './../../blank/components/ElementAddon'

  export default {
    name: 'ElementAddon',
    render: ElementAddon.render,
    data() {
      return {
        defaultClasses: {
          container: 'vf-addon',
          container_before: 'vf-addon-before',
          container_after: 'vf-addon-after',
          wrapper: 'vf-addon-wrapper',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-addon {
    align-items: center;
    display: flex;
    padding: var(--vf-input-py) var(--vf-input-px);
    border: var(--vf-border-width) solid var(--vf-border-color);
    border-radius: var(--vf-border-radius);
    background: var(--vf-addon-bg);
    color: var(--vf-addon-color);
  }

  .vf-addon-before {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;

    & ~ .vf-input,
    & ~ div .vf-input,
    & ~ span .vf-input {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  .vf-addon-after {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
    order: 2;

    & ~ .vf-input,
    & ~ div .vf-input,
    & ~ span .vf-input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
</style>