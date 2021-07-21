<script>
  import ElementAddon from './../../blank/components/ElementAddon'

  export default {
    name: 'ElementAddon',
    render: ElementAddon.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-addon',
          container_before: 'form-addon-before',
          container_after: 'form-addon-after',
          wrapper: 'form-addon-wrapper',
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-addon {
    align-items: center;
    display: flex;
    padding: var(--form-input-py) var(--form-input-px);
    border: var(--form-border-width) solid var(--form-border-color);
    border-radius: var(--form-border-radius);
    background: var(--form-addon-bg);
    color: var(--form-addon-color);
  }

  .form-addon-before {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;

    & ~ .form-input,
    & ~ div .form-input {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  .form-addon-after {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
    order: 2;

    & ~ .form-input,
    & ~ div .form-input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
</style>