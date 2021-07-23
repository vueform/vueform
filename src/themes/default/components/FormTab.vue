<script>
  import FormTab from './../../blank/components/FormTab'

  export default {
    name: 'FormTab',
    render: FormTab.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-tab',
          wrapper: 'form-tab-link',
          wrapper_active: 'is-active',
          wrapper_inactive: '',
          wrapper_valid: '',
          wrapper_invalid: 'has-error',
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-tab-link {
    padding: 0.5rem 1rem;
    display: block;
    background: white;
    margin-left: 1px;
    margin-right: 1px;
    color: inherit;
    text-decoration: none;

    &.has-error {
      color: var(--form-error-color);
    }

    &.is-active {
      border: 1px solid var(--form-border-color);
      border-bottom: 1px solid #FFFFFF;
      border-top-left-radius: var(--form-border-radius);
      border-top-right-radius: var(--form-border-radius);
      margin-bottom: -1px;
      margin-left: 0;
      margin-right: 0;
    }
  }
  
</style>