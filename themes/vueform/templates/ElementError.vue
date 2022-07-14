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
    font-size: var(--vf-font-size-small);
    line-height: var(--vf-line-height-small);
    letter-spacing: var(--vf-letter-spacing-small);
    color: var(--vf-color-danger);
    margin-top: 0.25rem;

    &.vf-element-error-sm {
      font-size: var(--vf-font-size-small-sm);
      line-height: var(--vf-line-height-small-sm);
      letter-spacing: var(--vf-letter-spacing-small-sm);
      margin-top: 0.125rem;
    }

    &.vf-element-error-lg {
      font-size: var(--vf-font-size-small-lg);
      line-height: var(--vf-line-height-small-lg);
      letter-spacing: var(--vf-letter-spacing-small-lg);
    }
  }
</style>