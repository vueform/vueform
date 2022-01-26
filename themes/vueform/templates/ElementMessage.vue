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
    font-size: var(--vf-element-text-font-size);
    line-height: var(--vf-element-text-line-height);
    color: var(--vf-success-color);
    margin-top: 0.25rem;

    &.vf-element-message-sm {
      font-size: var(--vf-element-text-font-size-sm);
      line-height: var(--vf-element-text-line-height-sm);
      margin-top: 0.125rem;
    }

    &.vf-element-message-lg {
      font-size: var(--vf-element-text-font-size-lg);
      line-height: var(--vf-element-text-line-height-lg);
    }
  }
</style>