<script>
  import RadiogroupRadio_blocks from './../../../../blank/templates/elements/partials/RadiogroupRadio_blocks.vue'

  export default {
    name: 'RadiogroupRadio_blocks',
    render: RadiogroupRadio_blocks.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-radio-blocks-container',
          wrapper: 'vf-radio-blocks',
          wrapper_not_last: 'vf-radio-blocks-not-last',
          wrapper_first: 'vf-radio-blocks-first',
          wrapper_last: 'vf-radio-blocks-last',
          wrapper_selected: 'vf-radio-blocks-selected',
          wrapper_unselected: 'vf-radio-blocks-unselected',
          wrapper_disabled: 'vf-radio-blocks-disabled',
          wrapper_sm: 'vf-radio-blocks-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-radio-blocks-lg',
          input: 'vf-radio',
          input_enabled: '',
          input_disabled: '',
          input_sm: 'vf-radio-sm',
          input_md: '',
          input_lg: 'vf-radio-lg',
          text_wrapper: 'vf-radio-blocks-text-wrapper',
          text: 'vf-radio-blocks-text',
          description: 'vf-radio-blocks-description',
          description_sm: 'vf-radio-blocks-description-sm',
          description_md: '',
          description_lg: 'vf-radio-blocks-description-lg',
          $wrapper: (classes, { index, items, el$, value, isDisabled, Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            index < Object.keys(items).length - 1 ? classes.wrapper_not_last : null,
            index === 0 ? classes.wrapper_first : null,
            index === Object.keys(items).length - 1 ? classes.wrapper_last : null,
            el$.value == value ? classes.wrapper_selected : classes.wrapper_unselected,
            isDisabled ? classes.wrapper_disabled : null,
          ]),
          $input: (classes, { isDisabled, Size }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : classes.input_enabled
          ]),
          $description: (classes, { Size }) => ([
            classes.description,
            classes[`description_${Size}`],
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue & RadiogroupElement.vue
  .vf-radio-blocks-container {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
  }

  .vf-radio-blocks {
    display: flex;
    align-items: center;
    border: var(--vf-border-width) solid var(--vf-border-color);
    width: 100%;
    padding: 0.75rem 1rem;
    background: #ffffff;

    &.vf-radio-blocks-not-last {
      border-bottom: 0;
    }

    &.vf-radio-blocks-first {
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }

    &.vf-radio-blocks-last {
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }

    &.vf-radio-blocks-selected {
      background-color: var(--vf-gray-100);
    }

    &.vf-radio-blocks-disabled {
      opacity: 0.5;
    }

    &.vf-radio-blocks-sm {
      padding: 0.625rem 1rem;
    }

    &.vf-radio-blocks-lg {
      padding: 0.875rem 1rem;
    }
  }

  .vf-radio-blocks-text-wrapper {
    margin-left: 0.5rem;
  }

  .vf-radio-blocks-description {
    color: var(--vf-gray-500);
    font-size: 87.5%;
    margin-top: -0.125rem;

    &.vf-radio-blocks-description-sm {
      font-size: 87.5%;
      margin-top: -0.125rem;
    }

    &.vf-radio-blocks-description-lg {
      font-size: 87.5%;
      margin-top: -0.125rem;
    }
  }
</style>