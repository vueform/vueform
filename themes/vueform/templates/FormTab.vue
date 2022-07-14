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
          wrapper: 'vf-tab-wrapper',
          wrapper_active: 'vf-tab-wrapper-active',
          wrapper_inactive: '',
          wrapper_valid: '',
          wrapper_invalid: 'vf-tab-wrapper-invalid',
          wrapper_sm: 'vf-tab-wrapper-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-tab-wrapper-lg',
          $container: (classes, {}) => ([
            classes.container,
          ]),
          $wrapper: (classes, { active, invalid, Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            active ? classes.wrapper_active : classes.wrapper_inactive,
            invalid ? classes.wrapper_invalid : classes.wrapper_valid,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-tab-wrapper {
    padding: 0.5rem 1rem;
    display: block;
    margin-left: 1px;
    margin-right: 1px;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    color: var(--vf-color-input);

    &:hover {
      text-decoration: none;
    }

    &.vf-tab-wrapper-sm {
      padding: 0.375rem 0.875rem;
    }

    &.vf-tab-wrapper-lg {
      padding: 0.5rem 1rem;
    }

    &.vf-tab-wrapper-active {
      border-color: var(--vf-primary);
    }

    &.vf-tab-wrapper-invalid {
      border-color: var(--vf-danger);
      color: var(--vf-color-danger);
    }
  }
</style>