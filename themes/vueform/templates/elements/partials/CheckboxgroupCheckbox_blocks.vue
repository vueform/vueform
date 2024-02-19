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
          container_sm: 'vf-checkbox-blocks-container-sm',
          container_md: '',
          container_lg: 'vf-checkbox-blocks-container-lg',
          wrapper: 'vf-checkbox-blocks',
          wrapper_not_last: 'vf-checkbox-blocks-not-last',
          wrapper_first: 'vf-checkbox-blocks-first',
          wrapper_first_sm: 'vf-checkbox-blocks-first-sm',
          wrapper_first_md: '',
          wrapper_first_lg: 'vf-checkbox-blocks-first-lg',
          wrapper_last: 'vf-checkbox-blocks-last',
          wrapper_last_sm: 'vf-checkbox-blocks-last-sm',
          wrapper_last_md: '',
          wrapper_last_lg: 'vf-checkbox-blocks-last-lg',
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
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ]),
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
          ]),
          $input: (classes, { isDisabled, Size }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : classes.input_enabled,
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
  /* Some styles are contained in Vueform.vue & CheckboxgroupElement.vue */
  .vf-checkbox-blocks-container {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    border-radius: var(--vf-radius-large);

    .vf-checkbox {
      margin-top: 0;
    }

    &.vf-checkbox-blocks-container-sm {
      border-radius: var(--vf-radius-large-sm);
    }

    &.vf-checkbox-blocks-container-lg {
      border-radius: var(--vf-radius-large-lg);
    }
  }

  .vf-checkbox-blocks {
    display: flex;
    align-items: center;
    border-style: solid;
    border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);
    border-color: var(--vf-border-color-input);
    width: 100%;
    padding: var(--vf-py-group-blocks) var(--vf-px-group-blocks);
    color: var(--vf-color-input);
    font-size: var(--vf-font-size);
    line-height: var(--vf-line-height);
    letter-spacing: var(--vf-letter-spacing);
    background: var(--vf-bg-input);

    &.vf-checkbox-blocks-not-last {
      border-bottom: 0;
    }

    &.vf-checkbox-blocks-first {
      border-radius: var(--vf-radius-large);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      &.vf-checkbox-blocks-first-sm {
        border-radius: var(--vf-radius-large-sm);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }

      &.vf-checkbox-blocks-first-lg {
        border-radius: var(--vf-radius-large-lg);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    &.vf-checkbox-blocks-last {
      border-radius: var(--vf-radius-large);
      border-top-left-radius: 0;
      border-top-right-radius: 0;

      &.vf-checkbox-blocks-last-sm {
        border-radius: var(--vf-radius-large-sm);
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }

      &.vf-checkbox-blocks-last-lg {
        border-radius: var(--vf-radius-large-lg);
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }

    &.vf-checkbox-blocks-selected {
      background-color: var(--vf-bg-selected);
    }

    &.vf-checkbox-blocks-disabled {
      opacity: 0.5;
    }

    &.vf-checkbox-blocks-sm {
      padding: var(--vf-py-group-blocks-sm) var(--vf-px-group-blocks-sm);
      font-size: var(--vf-font-size-sm);
      line-height: var(--vf-line-height-sm);
      letter-spacing: var(--vf-letter-spacing-sm);
    }

    &.vf-checkbox-blocks-lg {
      padding: var(--vf-py-group-blocks-lg) var(--vf-px-group-blocks-lg);
      font-size: var(--vf-font-size-lg);
      line-height: var(--vf-line-height-lg);
      letter-spacing: var(--vf-letter-spacing-lg);
    }
  }

  .vf-checkbox-blocks-text-wrapper {
    margin-left: 0.5rem;
  }

  .vf-checkbox-blocks-description {
    color: var(--vf-color-muted);
    font-size: var(--vf-font-size-small);
    line-height: var(--vf-line-height-small);
    letter-spacing: var(--vf-letter-spacing-small);
    margin-top: -0.125rem;

    &.vf-checkbox-blocks-description-sm {
      font-size: var(--vf-font-size-small-sm);
      line-height: var(--vf-line-height-small-sm);
      letter-spacing: var(--vf-letter-spacing-small-sm);
      margin-top: -0.125rem;
    }

    &.vf-checkbox-blocks-description-lg {
      font-size: var(--vf-font-size-small-lg);
      line-height: var(--vf-line-height-small-lg);
      letter-spacing: var(--vf-letter-spacing-small-lg);
      margin-top: -0.125rem;
    }
  }
</style>