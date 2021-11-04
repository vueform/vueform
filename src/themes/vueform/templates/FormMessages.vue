<script>
  import FormMessages from './../../blank/templates/FormMessages.vue'

  export default {
    name: 'FormMessages',
    render: FormMessages.render,
    data() {
      return {
        defaultClasses: {
          container: 'vf-messages',
          message: '',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-messages {
    background: var(--vf-success-bg);
    color: var(--vf-success-color);
    padding: 0.75rem 1.25rem;
    border-radius: 0.25rem;
    margin-bottom: var(--vf-gutter);
  }
</style>