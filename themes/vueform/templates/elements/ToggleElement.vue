<script>
  import ToggleElement from './../../../blank/templates/elements/ToggleElement.vue'
  import Toggle from '@vueform/toggle/src/Toggle.vue'

  export default {
    name: 'ToggleElement',
    render: ToggleElement.render,
    components: {
      Toggle,
    },
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-contains-link',
          wrapper: 'vf-toggle-wrapper',
          wrapper_left: 'vf-toggle-wrapper-left',
          wrapper_right: 'vf-toggle-wrapper-right',
          text: 'vf-toggle-text',
          text_sm: 'vf-toggle-text-sm',
          text_md: '',
          text_lg: 'vf-toggle-text-lg',
          text_left: 'vf-toggle-text-left',
          text_right: 'vf-toggle-text-right',
          toggle: {
            container: 'vf-toggle-container',
            container_enabled: '',
            container_disabled: 'vf-toggle-container-disabled',
            toggle: 'vf-toggle',
            toggle_sm: 'vf-toggle-sm',
            toggle_md: '',
            toggle_lg: 'vf-toggle-lg',
            toggleOn: 'vf-toggle-on',
            toggleOff: 'vf-toggle-off',
            toggleOnDisabled: 'vf-toggle-on-disabled',
            toggleOffDisabled: 'vf-toggle-off-disabled',
            handle: 'vf-toggle-handle',
            handle_sm: 'vf-toggle-handle-sm',
            handle_md: '',
            handle_lg: 'vf-toggle-handle-lg',
            handleOn: 'vf-toggle-handle-on',
            handleOff: 'vf-toggle-handle-off',
            handleOnDisabled: 'vf-toggle-handle-on-disabled',
            handleOffDisabled: 'vf-toggle-handle-off-disabled',
            label: 'vf-toggle-label',
            label_sm: 'vf-toggle-label-sm',
            label_md: '',
            label_lg: 'vf-toggle-label-lg',
            $container: (classes, { Size, isDisabled }) => ([
              classes.toggle.container,
              classes.toggle[`container_${Size}`],
              !isDisabled ? classes.toggle.container_enabled : classes.toggle.container_disabled,
            ]),
            $toggle: (classes, { Size }) => ([
              classes.toggle.toggle,
              classes.toggle[`toggle_${Size}`],
            ]),
            $handle: (classes, { Size }) => ([
              classes.toggle.handle,
              classes.toggle[`handle_${Size}`],
            ]),
            $label: (classes, { Size }) => ([
              classes.toggle.label,
              classes.toggle[`label_${Size}`],
            ]),
          },
          $text: (classes, { Size, align }) => ([
            classes.text,
            classes[`text_${Size}`],
            align === 'left' ? classes.text_left : null,
            align === 'right' ? classes.text_right : null,
          ]),
          $wrapper: (classes, { align }) => ([
            classes.wrapper,
            align === 'left' ? classes.wrapper_left : null,
            align === 'right' ? classes.wrapper_right : null,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-toggle-wrapper {
    display: flex;
    align-items: flex-start;
    width: 100%;
  }

  .vf-toggle-text {
    margin-left: var(--vf-space-checkbox);

    &.vf-toggle-text-sm {
      margin-left: var(--vf-space-checkbox-sm);
    }

    &.vf-toggle-text-lg {
      margin-left: var(--vf-space-checkbox-lg);
    }
  }

  /* @vueform/toggle styles */
  .vf-toggle-container {
    display: inline-block;
    outline: 0px solid var(--vf-ring-color);
    outline-offset: 0;
    border-radius: 9999px;
    transition: box-shadow .15s ease-in-out,
                color .15s ease-in-out,
                background-color .15s ease-in-out,
                border-color .15s ease-in-out;
    box-shadow: var(--vf-shadow-handles);

    &:hover:not(.vf-toggle-container-disabled) {
      box-shadow: var(--vf-shadow-handles-hover);
    }

    &:focus {
      box-shadow: var(--vf-shadow-handles-focus);
      outline: var(--vf-ring-width) solid var(--vf-ring-color);
    }

    &.vf-toggle-container-disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .vf-toggle {
    display: flex;
    border-radius: 999px;
    position: relative;
    cursor: pointer;
    transition: .3s all;
    align-items: center;
    box-sizing: content-box;
    border-width: var(--vf-border-width-toggle);
    border-style: solid;
    font-size: 0.75rem;
    width: var(--vf-toggle-width);
    height: var(--vf-toggle-height);
    line-height: 1;

    &.vf-toggle-sm {
      width: var(--vf-toggle-width-sm);
      height: var(--vf-toggle-height-sm);
      font-size: 0.75rem;
    }

    &.vf-toggle-lg {
      width: var(--vf-toggle-width-lg);
      height: var(--vf-toggle-height-lg);
      font-size: 0.8125rem;
    }
  }

  .vf-toggle-on {
    background: var(--vf-primary);
    border-color: var(--vf-primary);
    justify-content: flex-start;
    color: var(--vf-color-on-primary);
  }

  .vf-toggle-off {
    background: var(--vf-bg-passive);
    border-color: var(--vf-bg-passive);
    justify-content: flex-end;
    color: var(--vf-color-passive);
  }

  .vf-toggle-on-disabled {
    background: var(--vf-primary);
    border-color: var(--vf-primary);
    justify-content: flex-start;
    color: var(--vf-color-on-primary);
  }

  .vf-toggle-off-disabled {
    background: var(--vf-bg-passive);
    border-color: var(--vf-bg-passive);
    justify-content: flex-end;
    color: var(--vf-color-passive);
  }

  .vf-toggle-handle {
    display: inline-block;
    background: var(--vf-bg-toggle-handle);
    width: var(--vf-toggle-height);
    height: var(--vf-toggle-height);
    top: 0;
    border-radius: 50%;
    position: absolute;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    &.vf-toggle-handle-sm {
      width: var(--vf-toggle-height-sm);
      height: var(--vf-toggle-height-sm);
    }

    &.vf-toggle-handle-lg {
      width: var(--vf-toggle-height-lg);
      height: var(--vf-toggle-height-lg);
    }
  }

  .vf-toggle-handle-on {
    left: 100%;
    transform: translateX(-100%);
  }

  .vf-toggle-handle-off {
    left: 0%;
  }

  .vf-toggle-handle-on-disabled {
    left: 100%;
    transform: translateX(-100%);
    background: var(--vf-bg-toggle-handle);
  }

  .vf-toggle-handle-off-disabled {
    left: 0%;
    background: var(--vf-bg-toggle-handle);
  }

  .vf-toggle-label {
    text-align: center;
    width: calc(var(--vf-toggle-width) - var(--vf-toggle-height));
    box-sizing: border-box;
    white-space: nowrap;
    user-select: none;

    &.vf-toggle-label-sm {
      width: calc(var(--vf-toggle-width-sm) - var(--vf-toggle-height-sm));
    }

    &.vf-toggle-label-lg {
      width: calc(var(--vf-toggle-width-lg) - var(--vf-toggle-height-lg));
    }
  }

  body:not([dir="rtl"]) {
    .vf-toggle-wrapper-right {
      justify-content: flex-end;
    }

    .vf-toggle-text-right {
      margin-left: 0;
      margin-right: var(--vf-space-checkbox);
      order: -1;

      &.vf-toggle-text-sm {
        margin-left: 0;
        margin-right: var(--vf-space-checkbox-sm);
      }

      &.vf-toggle-text-lg {
        margin-left: 0;
        margin-right: var(--vf-space-checkbox-lg);
      }
    }
  }

  body[dir="rtl"] {
    .vf-toggle-wrapper-left {
      justify-content: flex-end;
    }

    .vf-toggle-text {
      margin-left: 0;
      margin-right: var(--vf-space-checkbox);

      &.vf-toggle-text-sm {
        margin-left: 0;
        margin-right: var(--vf-space-checkbox-sm);
      }

      &.vf-toggle-text-lg {
        margin-left: 0;
        margin-right: var(--vf-space-checkbox-lg);
      }

      &.vf-toggle-text-left {
        margin-right: 0;
        margin-left: var(--vf-space-checkbox);
        order: -1;

        &.vf-toggle-text-sm {
          margin-right: 0;
          margin-left: var(--vf-space-checkbox-sm);
        }

        &.vf-toggle-text-lg {
          margin-right: 0;
          margin-left: var(--vf-space-checkbox-lg);
        }
      }
    }
  }
</style>