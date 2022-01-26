<script>
  import ElementError from './../../blank/templates/ElementError.vue'

  export default {
    name: 'ElementError',
    render: ElementError.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-element-error',
          container_sm: 'vf-element-error-sm',
          container_md: '',
          container_lg: 'vf-element-error-lg',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-element-error {
    font-size: var(--vf-element-text-font-size);
    line-height: var(--vf-element-text-line-height);
    color: var(--vf-error-color);
    margin-top: 0.25rem;

    &.vf-element-error-sm {
      font-size: var(--vf-element-text-font-size-sm);
      line-height: var(--vf-element-text-line-height-sm);
      margin-top: 0.125rem;
    }

    &.vf-element-error-lg {
      font-size: var(--vf-element-text-font-size-lg);
      line-height: var(--vf-element-text-line-height-lg);
    }
  }
</style>