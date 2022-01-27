<script>
  import CheckboxgroupCheckbox_pills from './../../../../blank/templates/elements/partials/CheckboxgroupCheckbox_pills.vue'

  export default {
    name: 'CheckboxgroupCheckbox_pills',
    render: CheckboxgroupCheckbox_pills.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-checkbox-pills-container',
          wrapper: 'vf-checkbox-pills',
          wrapper_not_last: 'vf-checkbox-pills-not-last',
          wrapper_first: 'vf-checkbox-pills-first',
          wrapper_last: 'vf-checkbox-pills-last',
          wrapper_selected: 'vf-checkbox-pills-selected',
          wrapper_unselected: 'vf-checkbox-pills-unselected',
          wrapper_disabled: 'vf-checkbox-pills-disabled',
          wrapper_sm: 'vf-checkbox-pills-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-checkbox-pills-lg',
          input: 'vf-checkbox-pills-input',
          text: '',
          $wrapper: (classes, { index, items, el$, value, isDisabled, Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            index < Object.keys(items).length - 1 ? classes.wrapper_not_last : null,
            index === 0 ? classes.wrapper_first : null,
            index === Object.keys(items).length - 1 ? classes.wrapper_last : null,
            el$.value.indexOf(value) !== -1 ? classes.wrapper_selected : classes.wrapper_unselected,
            isDisabled ? classes.wrapper_disabled : null,
          ])
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue & CheckboxgroupElement.vue
  .vf-checkbox-pills-container {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
  }

  .vf-checkbox-pills {
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid var(--vf-border-width);
    padding: 0.375rem 0;
    width: 100%;
    background: #fff;

    &.vf-checkbox-pills-not-last {
      border-right: 0;
    }

    &.vf-checkbox-pills-first {
      border-top-left-radius: 0.375rem;
      border-bottom-left-radius: 0.375rem;
    }

    &.vf-checkbox-pills-last {
      border-top-right-radius: 0.375rem;
      border-bottom-right-radius: 0.375rem;
    }

    &.vf-checkbox-pills-selected {
      background-color: var(--vf-primary);
      border-color: rgba(0,0,0,0.15);
      color: #ffffff;
    }

    &.vf-checkbox-pills-unselected {
      border-color: var(--vf-border-color);
    }

    &.vf-checkbox-pills-disabled {
      opacity: 0.5;
    }

    &.vf-checkbox-pills-sm {
      padding: var(--vf-input-py-sm) var(--vf-input-px-sm);
    }

    &.vf-checkbox-pills-lg {
      padding: var(--vf-input-py-lg) var(--vf-input-px-lg);
    }
  }

  .vf-checkbox-pills-input {
    display: none;
  }
</style>