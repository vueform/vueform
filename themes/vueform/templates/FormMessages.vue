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
    padding: 0.75rem 1.25rem;
    border-radius: var(--vf-radius);
    margin-bottom: var(--vf-gutter);
    font-size: var(--vf-font-size);
    line-height: var(--vf-line-height);
    letter-spacing: var(--vf-letter-spacing);

    &.vf-messages-sm {
      border-radius: var(--vf-radius-sm);
      margin-bottom: var(--vf-gutter-sm);
    }

    &.vf-messages-lg {
      border-radius: var(--vf-radius-lg);
      margin-bottom: var(--vf-gutter-lg);
    }
  }
</style>