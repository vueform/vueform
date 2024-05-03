<script>
  import ElementAddonOptions from './../../blank/templates/ElementAddonOptions.vue'

  export default {
    name: 'ElementAddonOptions',
    render: ElementAddonOptions.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-addon-options',
          container_sm: 'vf-addon-options-sm',
          container_md: '',
          container_lg: 'vf-addon-options-lg',
          container_disabled: 'vf-addon-options-disabled',
          wrapper: 'vf-addon-options-wrapper',
          caret: 'vf-addon-options-caret',
          dropdown: 'vf-addon-options-dropdown',
          option: 'vf-addon-options-option',
          option_active: 'vf-addon-options-option-active',
          $container: (classes, { Size, el$ }) => ([
            classes.container,
            classes[`container_${Size}`],
            el$.isDisabled || el$.readonly ? classes.container_disabled : null,
          ]),
          $option: (classes, { selected, pointed }) => (option) => ([
            classes.option,
            selected.index === option.index || pointed.index === option.index ? classes.option_active : null
          ])
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-addon-options {
    display: flex;
    align-items: center;
    margin-left: var(--vf-px-input);
    font-size: var(--vf-font-size);
    line-height: var(--vf-line-height);
    letter-spacing: var(--vf-letter-spacing);

    &.vf-addon-options-sm {
      margin-left: var(--vf-px-input-sm);
      font-size: var(--vf-font-size-sm);
      line-height: var(--vf-line-height-sm);
      letter-spacing: var(--vf-letter-spacing-sm);
    }

    &.vf-addon-options-lg {
      margin-left: var(--vf-px-input-lg);
      font-size: var(--vf-font-size-lg);
      line-height: var(--vf-line-height-lg);
      letter-spacing: var(--vf-letter-spacing-lg);
    }

    &.vf-addon-options-disabled {
      opacity: 0.5;
      cursor: initial;
      pointer-events: none;
    }
  }

  .vf-addon-options-wrapper {
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 4px 4px;
    cursor: pointer;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    outline: none;

    &:hover, &:focus {
      background: var(--vf-bg-selected);
    }
  }

  .vf-addon-options-caret {
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3E%3C/path%3E%3C/svg%3E");
    mask-position: center center;
    -webkit-mask-position: center center;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    background-color: var(--vf-bg-icon);
    color: var(--vf-color-input);
    width: 0.625rem;
    height: 1rem;
    padding: 1px 0;
    margin-left: 0.5rem;
  }

  .vf-addon-options-dropdown {
    background-color: var(--vf-bg-input);
    border-width: var(--vf-border-width-dropdown);
    border-style: solid;
    border-color: var(--vf-border-color-input);
    box-shadow: var(--vf-shadow-dropdown);
    color: var(--vf-color-input);
    position: absolute;
    top: 1rem;
    bottom: 1rem;
    z-index: 1000;
    overflow-x: scroll;
  }

  .vf-addon-options-option {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0.3125rem 0.75rem;
    white-space: nowrap;
    
  }

  .vf-addon-options-option-active {
    background: var(--vf-bg-selected);
  }

  [dir="rtl"] {
    .vf-addon-options {
      margin-left: 0;
      margin-right: var(--vf-px-input);

      &.vf-addon-options-sm {
        margin-left: 0;
        margin-right: var(--vf-px-input-sm);
      }

      &.vf-addon-options-lg {
        margin-left: 0;
        margin-right: var(--vf-px-input-lg);
      }
    }

    .vf-addon-options-caret {
      margin-left: 0;
      margin-right: 0.5rem;
    }
  }

</style>