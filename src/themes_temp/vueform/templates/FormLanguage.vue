<script>
  import FormLanguage from './../../blank/templates/FormLanguage'

  export default {
    name: 'FormLanguage',
    render: FormLanguage.render,
    data() {
      return {
        defaultClasses: {
          container: 'vf-language',
          wrapper: 'vf-language-link',
          wrapper_active: 'is-active',
          wrapper_inactive: '',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-language {
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;
  }

  .vf-language-link {
    border-radius: var(--vf-border-radius);
    text-align: center;
    padding: 0.5rem 1rem;
    display: block;
    color: var(--vf-primary);
    text-decoration: none;

    &:hover { 
      text-decoration: none;
    }

    &.is-active {
      color: #FFFFFF;
      background: var(--vf-primary);
    }
  }
</style>