<script>
  import ElementMessage from './../../blank/templates/ElementMessage'

  export default {
    name: 'ElementMessage',
    render: ElementMessage.render,
    data() {
      return {
        defaultClasses: {
          container: 'vf-element-message',
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
  }
</style>