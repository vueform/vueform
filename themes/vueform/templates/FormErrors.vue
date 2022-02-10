<script>
  import FormErrors from './../../blank/templates/FormErrors.vue'

  export default {
    name: 'FormErrors',
    render: FormErrors.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-errors',
          container_sm: 'vf-errors-sm',
          container_md: '',
          container_lg: 'vf-errors-lg',
          error: '',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ])
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-errors {
    background: var(--vf-bg-danger);
    color: var(--vf-color-danger);
    padding: 0.75rem 1.25rem;
    border-radius: var(--vf-radius);
    margin-bottom: var(--vf-gutter);
    font-size: var(--vf-font-size);
    line-height: var(--vf-line-height);
    letter-spacing: var(--vf-letter-spacing);

    &.vf-errors-sm {
      border-radius: var(--vf-radius-sm);
      margin-bottom: var(--vf-gutter-sm);
    }

    &.vf-errors-lg {
      border-radius: var(--vf-radius-lg);
      margin-bottom: var(--vf-gutter-lg);
    }
  }
</style>