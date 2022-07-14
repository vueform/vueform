<script>
  import CheckboxgroupCheckbox_tabs from './../../../../blank/templates/elements/partials/CheckboxgroupCheckbox_tabs.vue'

  export default {
    name: 'CheckboxgroupCheckbox_tabs',
    render: CheckboxgroupCheckbox_tabs.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-checkbox-tabs-container',
          wrapper: 'vf-checkbox-tabs',
          wrapper_not_last: 'vf-checkbox-tabs-not-last',
          wrapper_first: 'vf-checkbox-tabs-first',
          wrapper_first_sm: 'vf-checkbox-tabs-first-sm',
          wrapper_first_md: '',
          wrapper_first_lg: 'vf-checkbox-tabs-first-lg',
          wrapper_last: 'vf-checkbox-tabs-last',
          wrapper_last_sm: 'vf-checkbox-tabs-last-sm',
          wrapper_last_md: '',
          wrapper_last_lg: 'vf-checkbox-tabs-last-lg',
          wrapper_selected: 'vf-checkbox-tabs-selected',
          wrapper_unselected: 'vf-checkbox-tabs-unselected',
          wrapper_disabled: 'vf-checkbox-tabs-disabled',
          wrapper_sm: 'vf-checkbox-tabs-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-checkbox-tabs-lg',
          input: 'vf-checkbox-tabs-input',
          text: '',
          $wrapper: (classes, { index, items, el$, value, isDisabled, Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            index < Object.keys(items).length - 1 ? classes.wrapper_not_last : null,
            index === 0 ? classes.wrapper_first : null,
            index === 0 ? classes[`wrapper_first_${Size}`] : null,
            index === Object.keys(items).length - 1 ? classes.wrapper_last : null,
            index === Object.keys(items).length - 1 ? classes[`wrapper_last_${Size}`] : null,
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
  .vf-checkbox-tabs-container {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
  }

  .vf-checkbox-tabs {
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: solid;
    border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
    border-color: var(--vf-border-color-input);
    padding: var(--vf-py-group-tabs) var(--vf-px-group-tabs);
    width: 100%;
    background: var(--vf-bg-input);
    color: var(--vf-color-input);
    font-size: var(--vf-font-size);
    line-height: var(--vf-line-height);
    letter-spacing: var(--vf-letter-spacing);

    &.vf-checkbox-tabs-not-last {
      border-right: 0;
    }

    &.vf-checkbox-tabs-first {
      border-radius: var(--vf-radius-input);
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;

      &.vf-checkbox-tabs-first-sm {
        border-radius: var(--vf-radius-input-sm);
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      &.vf-checkbox-tabs-first-lg {
        border-radius: var(--vf-radius-input-lg);
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    &.vf-checkbox-tabs-last {
      border-radius: var(--vf-radius-input-lg);
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;

      &.vf-checkbox-tabs-last-sm {
        border-radius: var(--vf-radius-input-sm);
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      &.vf-checkbox-tabs-last-lg {
        border-radius: var(--vf-radius-input-lg);
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }

    &.vf-checkbox-tabs-selected {
      background-color: var(--vf-primary);
      border-color: rgba(0,0,0,0.15);
      color: var(--vf-color-on-primary);
    }

    &.vf-checkbox-tabs-unselected {
      border-color: var(--vf-border-color-input);

      &:hover:not(.vf-radio-tabs-disabled) {
        background-color: var(--vf-bg-input-hover);
        color: var(--vf-color-input-hover);
      }
    }

    &.vf-checkbox-tabs-disabled {
      opacity: 0.5;
    }

    &.vf-checkbox-tabs-sm {
      padding: var(--vf-py-group-tabs-sm) var(--vf-px-group-tabs-sm);
      font-size: var(--vf-font-size-sm);
      line-height: var(--vf-line-height-sm);
      letter-spacing: var(--vf-letter-spacing-sm);
    }

    &.vf-checkbox-tabs-lg {
      padding: var(--vf-py-group-tabs-lg) var(--vf-px-group-tabs-lg);
      font-size: var(--vf-font-size-lg);
      line-height: var(--vf-line-height-lg);
      letter-spacing: var(--vf-letter-spacing-lg);
    }
  }

  .vf-checkbox-tabs-input {
    display: none;
  }
</style>