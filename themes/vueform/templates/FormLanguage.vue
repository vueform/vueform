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
    border-radius: var(--vf-border-radius);
    text-align: center;
    padding: 0.5rem 1rem;
    display: block;
    color: var(--vf-primary);
    text-decoration: none;

    &:hover { 
      text-decoration: none;
    }

    &.vf-language-wrapper-sm {
      border-radius: var(--vf-border-radius-sm);
    }

    &.vf-language-wrapper-lg {
      border-radius: var(--vf-border-radius-lg);
    }

    &.vf-language-wrapper-active {
      color: #FFFFFF;
      background: var(--vf-primary);
    }
  }
</style>