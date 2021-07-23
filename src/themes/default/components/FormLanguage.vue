<script>
  import FormLanguage from './../../blank/components/FormLanguage'

  export default {
    name: 'FormLanguage',
    render: FormLanguage.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-language',
          wrapper: 'form-language-link',
          wrapper_active: 'is-active',
          wrapper_inactive: '',
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-language {
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;
  }

  .form-language-link {
    border-radius: var(--form-border-radius);
    text-align: center;
    padding: 0.5rem 1rem;
    display: block;
    color: var(--form-primary);
    text-decoration: none;

    &.is-active {
      color: #FFFFFF;
      background: var(--form-primary);
    }
  }
</style>