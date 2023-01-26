<script>
  import ElementLabelFloating from './../../blank/templates/ElementLabelFloating.vue'

  export default {
    name: 'ElementLabelFloating',
    render: ElementLabelFloating.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-floating-wrapper',
          label: 'vf-floating-label',
          label_enabled: '',
          label_disabled: 'vf-floating-label-disabled',
          label_danger: 'vf-floating-label-danger',
          label_success: 'vf-floating-label-success',
          label_focused: 'vf-floating-label-focus',
          label_sm: 'vf-floating-label-sm',
          label_md: '',
          label_lg: 'vf-floating-label-lg',
          label_invisible: '',
          label_visible: 'vf-floating-label-visible',
          $label: (classes, { visible, Size, el$ }) => ([
            classes.label,
            classes[`label_${Size}`],
            visible ? classes.label_visible : classes.label_invisible,
            el$.focused ? classes.label_focused : null,
            !el$.isDisabled && !el$.isDanger && !el$.isSuccess ? classes.label_enabled : null,
            el$.isDisabled ? classes.label_disabled : null,
            el$.isDanger ? classes.label_danger : null,
            el$.isSuccess ? classes.label_success : null,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-floating-wrapper {
    position: relative;
  }

  .vf-floating-label {
    position: absolute;
    z-index: 1;
    left: var(--vf-px-input);
    font-size: 0.6875rem;
    background-color: var(--vf-bg-input);
    padding: 0 1px;
    line-height: 1px;
    transition-property: box-shadow, color, background-color, border-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
    opacity: 0;
    visibility: hidden;
    white-space: nowrap;
    color: var(--vf-color-floating);
    margin-top: var(--vf-floating-top);

    &.vf-floating-label-visible {
      opacity: 1;
      visibility: visible;
    }

    &.vf-floating-label-sm {
      left: var(--vf-px-input-sm);
      margin-top: var(--vf-floating-top-sm);
    }

    &.vf-floating-label-lg {
      left: var(--vf-px-input-lg);
      margin-top: var(--vf-floating-top-lg);
      background-color: transparent !important;
    }

    &.vf-floating-label-disabled {
      background-color: var(--vf-bg-disabled);
    }

    &.vf-floating-label-focus {
      background-color: var(--vf-bg-input-focus);
      color: var(--vf-color-floating-focus);
    }

    &.vf-floating-label-danger {
      background-color: var(--vf-bg-input-danger);
      color: var(--vf-color-floating-danger);
    }

    &.vf-floating-label-success {
      background-color: var(--vf-bg-input-success);
      color: var(--vf-color-floating-success);
    }
  }

  .vf-input-group {
    .vf-floating-label {
      top: calc(var(--vf-border-width-input-t) * (-1));
    }
  }

  [dir="rtl"] {
    .vf-floating-label {
      left: auto;
      right: var(--vf-px-input);

      &.vf-floating-label-sm {
        left: auto;
        right: var(--vf-px-input-sm);
      }

      &.vf-floating-label-lg {
        left: auto;
        right: var(--vf-px-input-lg);
      }
    }
  }
</style>