<script>
  import FormErrors from './../../blank/components/FormErrors'

  export default {
    name: 'FormErrors',
    render: FormErrors.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-errors',
          error: '',
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-errors {
    background: var(--form-error-bg);
    color: var(--form-error-color);
    padding: 0.75rem 1.25rem;
    border-radius: 0.25rem;
    margin-bottom: var(--form-gutter);
  }
</style>