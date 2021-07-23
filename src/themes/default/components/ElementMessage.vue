<script>
  import ElementMessage from './../../blank/components/ElementMessage'

  export default {
    name: 'ElementMessage',
    render: ElementMessage.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-element-message',
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-element-message {
    font-size: var(--form-element-text-font-size);
    line-height: var(--form-element-text-line-height);
    color: var(--form-success-color);
    margin-top: 0.25rem;
  }
</style>