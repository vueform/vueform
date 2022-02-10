<script>
  import ElementAddon from './../../blank/templates/ElementAddon.vue'

  export default {
    name: 'ElementAddon',
    render: ElementAddon.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-addon',
          container_before: 'vf-addon-before',
          container_after: 'vf-addon-after',
          container_sm: 'vf-addon-sm',
          container_md: '',
          container_lg: 'vf-addon-lg',
          container_before_sm: '',
          container_before_md: '',
          container_before_lg: '',
          container_after_sm: '',
          container_after_md: '',
          container_after_lg: '',
          wrapper: 'vf-addon-wrapper',
          $container: (classes, { type, Size }) => ([
            classes.container,
            classes[`container_${Size}`],
            classes[`container_${type}`],
            classes[`container_${type}_${Size}`],
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-addon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--vf-py-input) var(--vf-px-input);
    border-width: var(--vf-border-width-input);
    border-color: var(--vf-border-color-input);
    border-style: solid;
    border-radius: var(--vf-radius);
    background-color: var(--vf-bg-addon);
    color: var(--vf-color-addon);

    &.vf-addon-sm {
      padding: var(--vf-py-input-sm) var(--vf-px-input-sm);
      border-radius: var(--vf-radius-sm);
    }

    &.vf-addon-lg {
      padding: var(--vf-py-input-lg) var(--vf-px-input-lg);
      border-radius: var(--vf-radius-lg);
    }
  }

  .vf-addon-before {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;

    &.vf-addon-sm,
    &.vf-addon-lg {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

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

    &.vf-addon-sm,
    &.vf-addon-lg {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    & ~ .vf-input,
    & ~ div .vf-input,
    & ~ span .vf-input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  .vf-addon-wrapper {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
</style>