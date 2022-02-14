<script>
  import ElementMessage from './../../blank/templates/ElementMessage.vue'

  export default {
    name: 'ElementMessage',
    render: ElementMessage.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-element-message',
          container_sm: 'vf-element-message-sm',
          container_md: '',
          container_lg: 'vf-element-message-lg',
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
  .vf-element-message {
    font-size: var(--vf-font-size-small);
    line-height: var(--vf-line-height-small);
    letter-spacing: var(--vf-letter-spacing-small);
    color: var(--vf-color-success);
    margin-top: 0.25rem;

    &.vf-element-message-sm {
      font-size: var(--vf-font-size-small-sm);
      line-height: var(--vf-line-height-small-sm);
      letter-spacing: var(--vf-letter-spacing-small-sm);
      margin-top: 0.125rem;
    }

    &.vf-element-message-lg {
      font-size: var(--vf-font-size-small-lg);
      line-height: var(--vf-line-height-small-lg);
      letter-spacing: var(--vf-letter-spacing-small-lg);
    }
  }
</style>