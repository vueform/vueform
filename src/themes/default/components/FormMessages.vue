<script>
  import FormMessages from './../../blank/components/FormMessages'

  export default {
    name: 'FormMessages',
    render: FormMessages.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-messages',
          message: '',
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-messages {
    background: var(--form-message-bg);
    color: var(--form-message-color);
    padding: 0.75rem 1.25rem;
    border-radius: 0.25rem;
    margin-bottom: var(--form-gutter);
  }
</style>