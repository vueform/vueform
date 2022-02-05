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
          error: '',
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
    border-radius: 0.25rem;
    margin-bottom: var(--vf-gutter);
  }
</style>