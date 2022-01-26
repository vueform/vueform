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
          container: '',
          wrapper: 'vf-toggle-wrapper',
          toggle: {
            container: 'vf-toggle-container',
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
          text: 'vf-toggle-text',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-toggle-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: calc(var(--vf-input-py) + var(--vf-border-width));
  }

  .vf-toggle-text {
    margin-left: 0.5rem;
  }

  // @vueform/toggle styles
  .vf-toggle-container {
    display: inline-block;
    outline: none;
    border-radius: 9999px;

    &:focus {
      box-shadow: 0px 0px 0px var(--vf-ring-width) var(--vf-ring-color);
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
    border: var(--vf-toggle-border) solid;
    font-size: var(--vf-toggle-font-size);
    width: var(--vf-toggle-width);
    height: var(--vf-toggle-height);
    line-height: 1;

    &.vf-toggle-sm {
      width: var(--vf-toggle-width-sm);
      height: var(--vf-toggle-height-sm);
      font-size: var(--vf-toggle-font-size-sm);
    }

    &.vf-toggle-lg {
      width: var(--vf-toggle-width-lg);
      height: var(--vf-toggle-height-lg);
      font-size: var(--vf-toggle-font-size-lg);
    }
  }

  .vf-toggle-on {
    background: var(--vf-toggle-bg-on);
    border-color: var(--vf-toggle-border-on);
    justify-content: flex-start;
    color: var(--vf-toggle-text-on);
  }

  .vf-toggle-off {
    background: var(--vf-toggle-bg-off);
    border-color: var(--vf-toggle-border-off);
    justify-content: flex-end;
    color: var(--vf-toggle-text-off);
  }

  .vf-toggle-on-disabled {
    background: var(--vf-toggle-bg-on-disabled);
    border-color: var(--vf-toggle-border-on-disabled);
    justify-content: flex-start;
    color: var(--vf-toggle-text-on-disabled);
    cursor: not-allowed;
    opacity: var(--vf-toggle-opacity-on-disabled);
  }

  .vf-toggle-off-disabled {
    background: var(--vf-toggle-bg-off-disabled);
    border-color: var(--vf-toggle-border-off-disabled);
    justify-content: flex-end;
    color: var(--vf-toggle-text-off-disabled);
    cursor: not-allowed;
    opacity: var(--vf-toggle-opacity-off-disabled);
  }

  .vf-toggle-handle {
    display: inline-block;
    background: var(--vf-toggle-handle-enabled);
    width: var(--vf-toggle-height);
    height: var(--vf-toggle-height);
    top: 0;
    border-radius: 50%;
    position: absolute;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: var(--vf-toggle-duration);

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
    background: var(--vf-toggle-handle-disabled);
  }

  .vf-toggle-handle-off-disabled {
    left: 0%;
    background: var(--vf-toggle-handle-disabled);
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
</style>