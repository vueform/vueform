<script>
  import FormMessages from './../../blank/templates/FormMessages.vue'

  export default {
    name: 'FormMessages',
    render: FormMessages.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-messages',
          container_sm: 'vf-messages-sm',
          container_md: '',
          container_lg: 'vf-messages-lg',
          message: '',
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
  .vf-messages {
    background: var(--vf-bg-success);
    color: var(--vf-color-success);
    border-radius: var(--vf-radius-input);
    margin-bottom: var(--vf-gutter);
    font-size: var(--vf-font-size);
    line-height: var(--vf-line-height);
    letter-spacing: var(--vf-letter-spacing);
    padding: 0.5rem 0.75rem;

    &.vf-messages-sm {
      border-radius: var(--vf-radius-input-sm);
      margin-bottom: var(--vf-gutter-sm);
      font-size: var(--vf-font-size-sm);
      line-height: var(--vf-line-height-sm);
      letter-spacing: var(--vf-letter-spacing-sm);
      padding: 0.5rem 0.75rem;
    }

    &.vf-messages-lg {
      border-radius: var(--vf-radius-input-lg);
      margin-bottom: var(--vf-gutter-lg);
      font-size: var(--vf-font-size-lg);
      line-height: var(--vf-line-height-lg);
      letter-spacing: var(--vf-letter-spacing-lg);
      padding: 0.75rem 1rem;
    }
  }
</style>