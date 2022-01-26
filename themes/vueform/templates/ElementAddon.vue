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
    align-items: center;
    display: flex;
    padding: var(--vf-input-py) var(--vf-input-px);
    border: var(--vf-border-width) solid var(--vf-border-color);
    border-radius: var(--vf-border-radius);
    background: var(--vf-addon-bg);
    color: var(--vf-addon-color);

    &.vf-addon-sm {
      padding: var(--vf-input-py-sm) var(--vf-input-px-sm);
      border-radius: var(--vf-border-radius-sm);
    }

    &.vf-addon-lg {
      padding: var(--vf-input-py-lg) var(--vf-input-px-lg);
      border-radius: var(--vf-border-radius-lg);
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
</style>