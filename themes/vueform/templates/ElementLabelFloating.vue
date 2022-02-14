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
          label_sm: 'vf-floating-label-sm',
          label_md: '',
          label_lg: 'vf-floating-label-lg',
          label_invisible: '',
          label_visible: 'vf-floating-label-visible',
          $label: (classes, { visible, Size, el$ }) => ([
            classes.label,
            classes[`label_${Size}`],
            visible ? classes.label_visible : classes.label_invisible,
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
    z-index: 5;
    left: var(--vf-px-input);
    font-size: 0.6875rem;
    background-color: var(--vf-bg-input);
    padding: 0 1px;
    line-height: 1px;
    transition: all .2s ease-in-out;
    opacity: 0;
    visibility: hidden;
    white-space: nowrap;
    top: calc(var(--vf-border-width-input-t) * (-1));
    color: var(--vf-color-muted);

    &.vf-floating-label-visible {
      opacity: 1;
      visibility: visible;
    }

    &.vf-floating-label-sm {
      left: var(--vf-px-input-sm);
    }

    &.vf-floating-label-lg {
      left: var(--vf-px-input-lg);
      margin-top: 0.625rem;
    }

    &.vf-floating-label-disabled {
      background-color: var(--vf-bg-input-disabled);
    }

    &.vf-floating-label-danger {
      background-color: var(--vf-bg-input-danger);
    }

    &.vf-floating-label-success {
      background-color: var(--vf-bg-input-success);
    }
  }
</style>