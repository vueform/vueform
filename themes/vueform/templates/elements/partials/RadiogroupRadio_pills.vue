<script>
  import RadiogroupRadio_pills from './../../../../blank/templates/elements/partials/RadiogroupRadio_pills.vue'

  export default {
    name: 'RadiogroupRadio_pills',
    render: RadiogroupRadio_pills.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-radio-pills-container',
          wrapper: 'vf-radio-pills',
          wrapper_not_last: 'vf-radio-pills-not-last',
          wrapper_first: 'vf-radio-pills-first',
          wrapper_last: 'vf-radio-pills-last',
          wrapper_selected: 'vf-radio-pills-selected',
          wrapper_unselected: 'vf-radio-pills-unselected',
          wrapper_disabled: 'vf-radio-pills-disabled',
          wrapper_sm: 'vf-radio-pills-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-radio-pills-lg',
          input: 'vf-radio-pills-input',
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
  .vf-radio-pills-container {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
  }

  .vf-radio-pills {
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid var(--vf-border-width);
    padding: 0.375rem 0;
    width: 100%;
    background: #fff;

    &.vf-radio-pills-not-last {
      border-right: 0;
    }

    &.vf-radio-pills-first {
      border-top-left-radius: 0.375rem;
      border-bottom-left-radius: 0.375rem;
    }

    &.vf-radio-pills-last {
      border-top-right-radius: 0.375rem;
      border-bottom-right-radius: 0.375rem;
    }

    &.vf-radio-pills-selected {
      background-color: var(--vf-primary);
      border-color: var(--vf-primary);
      border-left-color: rgba(0,0,0,0.15);
      border-right-color: #ffffff;
      color: #ffffff;
    }

    &.vf-radio-pills-unselected {
      border-color: var(--vf-border-color);
    }

    &.vf-radio-pills-disabled {
      opacity: 0.5;
    }

    &.vf-radio-pills-sm {
      padding: var(--vf-input-py-sm) var(--vf-input-px-sm);
    }

    &.vf-radio-pills-lg {
      padding: var(--vf-input-py-lg) var(--vf-input-px-lg);
    }
  }

  .vf-radio-pills-input {
    display: none;
  }
</style>