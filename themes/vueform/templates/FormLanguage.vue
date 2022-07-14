<script>
  import FormLanguage from './../../blank/templates/FormLanguage.vue'

  export default {
    name: 'FormLanguage',
    render: FormLanguage.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-language',
          wrapper: 'vf-language-wrapper',
          wrapper_sm: 'vf-language-wrapper-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-language-wrapper-lg',
          wrapper_active: 'vf-language-wrapper-active',
          wrapper_inactive: '',
          $wrapper: (classes, { selected, Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            selected ? classes.wrapper_active : classes.wrapper_inactive
          ]),
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

  .vf-language-wrapper {
    padding: 0.5rem 1rem;
    display: block;
    margin-left: 1px;
    margin-right: 1px;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    color: var(--vf-color-input);
    text-align: center;

    &:hover {
      text-decoration: none;
    }

    &.vf-language-wrapper-sm {
      padding: 0.375rem 0.875rem;
    }

    &.vf-language-wrapper-lg {
      padding: 0.5rem 1rem;
    }

    &.vf-language-wrapper-active {
      border-color: var(--vf-primary);
    }

    &.vf-language-wrapper-invalid {
      border-color: var(--vf-danger);
      color: var(--vf-color-danger);
    }
  }
</style>