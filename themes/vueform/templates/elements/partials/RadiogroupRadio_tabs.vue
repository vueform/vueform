<script>
  import RadiogroupRadio_tabs from './../../../../blank/templates/elements/partials/RadiogroupRadio_tabs.vue'

  export default {
    name: 'RadiogroupRadio_tabs',
    render: RadiogroupRadio_tabs.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-radio-tabs-container',
          wrapper: 'vf-radio-tabs',
          wrapper_not_last: 'vf-radio-tabs-not-last',
          wrapper_first: 'vf-radio-tabs-first',
          wrapper_first_sm: 'vf-radio-tabs-first-sm',
          wrapper_first_md: '',
          wrapper_first_lg: 'vf-radio-tabs-first-lg',
          wrapper_last: 'vf-radio-tabs-last',
          wrapper_last_sm: 'vf-radio-tabs-last-sm',
          wrapper_last_md: '',
          wrapper_last_lg: 'vf-radio-tabs-last-lg',
          wrapper_selected: 'vf-radio-tabs-selected',
          wrapper_unselected: 'vf-radio-tabs-unselected',
          wrapper_disabled: 'vf-radio-tabs-disabled',
          wrapper_sm: 'vf-radio-tabs-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-radio-tabs-lg',
          input: 'vf-radio-tabs-input',
          text: '',
          $wrapper: (classes, { index, items, el$, value, isDisabled, Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            index < Object.keys(items).length - 1 ? classes.wrapper_not_last : null,
            index === 0 ? classes.wrapper_first : null,
            index === Object.keys(items).length - 1 ? classes.wrapper_last : null,
            el$.value == value ? classes.wrapper_selected : classes.wrapper_unselected,
            isDisabled ? classes.wrapper_disabled : null,
          ])
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue & RadiogroupElement.vue
  .vf-radio-tabs-container {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
  }

  .vf-radio-tabs {
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

    &.vf-radio-tabs-not-last {
      border-right: 0;
    }

    &.vf-radio-tabs-first {
      border-radius: var(--vf-radius-input);
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;

      &.vf-radio-tabs-first-sm {
        border-radius: var(--vf-radius-input-sm);
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      &.vf-radio-tabs-first-lg {
        border-radius: var(--vf-radius-input-lg);
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    &.vf-radio-tabs-last {
      border-radius: var(--vf-radius-input-lg);
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;

      &.vf-radio-tabs-last-sm {
        border-radius: var(--vf-radius-input-sm);
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      &.vf-radio-tabs-last-lg {
        border-radius: var(--vf-radius-input-lg);
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }

    &.vf-radio-tabs-selected {
      background-color: var(--vf-primary);
      border-color: rgba(0,0,0,0.15);
      color: var(--vf-color-on-primary);
    }

    &.vf-radio-tabs-unselected {
      border-color: var(--vf-border-color-input);

      &:hover:not(.vf-radio-tabs-disabled) {
        background-color: var(--vf-bg-input-hover);
        color: var(--vf-color-input-hover);
      }
    }

    &.vf-radio-tabs-disabled {
      opacity: 0.5;
    }

    &.vf-radio-tabs-sm {
      padding: var(--vf-py-group-tabs-sm) var(--vf-px-group-tabs-sm);
      font-size: var(--vf-font-size-sm);
      line-height: var(--vf-line-height-sm);
      letter-spacing: var(--vf-letter-spacing-sm);
    }

    &.vf-radio-tabs-lg {
      padding: var(--vf-py-group-tabs-lg) var(--vf-px-group-tabs-lg);
      font-size: var(--vf-font-size-lg);
      line-height: var(--vf-line-height-lg);
      letter-spacing: var(--vf-letter-spacing-lg);
    }
  }

  .vf-radio-tabs-input {
    display: none;
  }
</style>