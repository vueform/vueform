<script>
  import FormTab from './../../blank/templates/FormTab.vue'

  export default {
    name: 'FormTab',
    render: FormTab.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-tab',
          wrapper: 'vf-tab-link',
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
  .vf-tab-link {
    padding: 0.5rem 1rem;
    display: block;
    background: white;
    margin-left: 1px;
    margin-right: 1px;
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }

    &.has-error {
      color: var(--vf-error-color);
    }

    &.is-active {
      border: 1px solid var(--vf-border-color);
      border-bottom: 1px solid #FFFFFF;
      border-top-left-radius: var(--vf-border-radius);
      border-top-right-radius: var(--vf-border-radius);
      margin-bottom: -1px;
      margin-left: 0;
      margin-right: 0;
    }
  }
  
</style>