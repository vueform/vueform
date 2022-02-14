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
    background: var(--vf-bg-addon);
    color: var(--vf-color-addon);
    border-radius: var(--vf-radius-input);
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 0%;

    &.vf-addon-before {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      padding: 0 var(--vf-space-addon) 0 var(--vf-px-input);

      &.vf-addon-sm {
        padding: 0 var(--vf-space-addon-sm) 0 var(--vf-px-input-sm);
      }

      &.vf-addon-lg {
        padding: 0 var(--vf-space-addon-lg) 0 var(--vf-px-input-lg);
      }
    }

    &.vf-addon-after {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      padding: 0 var(--vf-px-input) 0 var(--vf-space-addon);
      order: 2;

      &.vf-addon-sm {
        padding: 0 var(--vf-px-input-sm) 0 var(--vf-space-addon-sm);
      }

      &.vf-addon-lg {
        padding: 0 var(--vf-px-input-lg) 0 var(--vf-space-addon-lg);
      }
    }
  }

  .vf-addon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>