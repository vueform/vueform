<script>
  import CheckboxgroupCheckbox_blocks from './../../../../blank/templates/elements/partials/CheckboxgroupCheckbox_blocks.vue'

  export default {
    name: 'CheckboxgroupCheckbox_blocks',
    render: CheckboxgroupCheckbox_blocks.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-checkbox-blocks-container',
          wrapper: 'vf-checkbox-blocks',
          wrapper_not_last: 'vf-checkbox-blocks-not-last',
          wrapper_first: 'vf-checkbox-blocks-first',
          wrapper_last: 'vf-checkbox-blocks-last',
          wrapper_selected: 'vf-checkbox-blocks-selected',
          wrapper_unselected: 'vf-checkbox-blocks-unselected',
          wrapper_disabled: 'vf-checkbox-blocks-disabled',
          wrapper_sm: 'vf-checkbox-blocks-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-checkbox-blocks-lg',
          input: 'vf-checkbox',
          input_enabled: '',
          input_disabled: '',
          input_sm: 'vf-checkbox-sm',
          input_md: '',
          input_lg: 'vf-checkbox-lg',
          text_wrapper: 'vf-checkbox-blocks-text-wrapper',
          text: 'vf-checkbox-blocks-text',
          description: 'vf-checkbox-blocks-description',
          description_sm: 'vf-checkbox-blocks-description-sm',
          description_md: '',
          description_lg: 'vf-checkbox-blocks-description-lg',
          $wrapper: (classes, { index, items, el$, value, isDisabled, Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            index < Object.keys(items).length - 1 ? classes.wrapper_not_last : null,
            index === 0 ? classes.wrapper_first : null,
            index === Object.keys(items).length - 1 ? classes.wrapper_last : null,
            el$.value.indexOf(value) !== -1 ? classes.wrapper_selected : classes.wrapper_unselected,
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
  // Some styles are contained in Vueform.vue & CheckboxgroupElement.vue
  .vf-checkbox-blocks-container {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
  }

  .vf-checkbox-blocks {
    display: flex;
    align-items: center;
    border: var(--vf-border-width) solid var(--vf-border-color);
    width: 100%;
    padding: 0.75rem 1rem;
    background: #ffffff;

    &.vf-checkbox-blocks-not-last {
      border-bottom: 0;
    }

    &.vf-checkbox-blocks-first {
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }

    &.vf-checkbox-blocks-last {
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }

    &.vf-checkbox-blocks-selected {
      background-color: var(--vf-gray-100);
    }

    &.vf-checkbox-blocks-disabled {
      opacity: 0.5;
    }

    &.vf-checkbox-blocks-sm {
      padding: 0.625rem 1rem;
    }

    &.vf-checkbox-blocks-lg {
      padding: 0.875rem 1rem;
    }
  }

  .vf-checkbox-blocks-text-wrapper {
    margin-left: 0.5rem;
  }

  .vf-checkbox-blocks-description {
    color: var(--vf-gray-500);
    font-size: 87.5%;
    margin-top: -0.125rem;

    &.vf-checkbox-blocks-description-sm {
      font-size: 87.5%;
      margin-top: -0.125rem;
    }

    &.vf-checkbox-blocks-description-lg {
      font-size: 87.5%;
      margin-top: -0.125rem;
    }
  }
</style>